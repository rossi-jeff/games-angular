import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SeaBattleMaxAxis } from '../../lib/sea-battle-max-axis';
import { PointType } from '../../types/point-type.type';
import { ShipTypeLength } from '../../enum/ship-type.enum';

type PlacementType = {
  ship: string;
  horizontal: string;
  vertical: number;
  direction: string;
};

type PlaceShipType = {
  ship: string;
  points: PointType[];
};

@Component({
  selector: 'app-sea-battle-placement',
  templateUrl: './sea-battle-placement.component.html',
  styleUrls: ['./sea-battle-placement.component.css'],
})
export class SeaBattlePlacementComponent implements OnInit {
  private _toPlace!: string[];

  @Input()
  set shipsToPlace(value: string[]) {
    console.log('shipsToPlace', value);
    this.placement.ship = value.length ? value[0] : '';
    this._toPlace = value;
    this.placement.horizontal = this.horizontal[0];
    this.placement.vertical = this.vertical[0];
    this.placement.direction = this.directions[0];
    setTimeout(() => {
      this.highlightShip();
    }, 100);
  }
  get shipsToPlace() {
    return this._toPlace;
  }
  @Input() axis!: number;
  @Output() placeShip = new EventEmitter<PlaceShipType>();
  horizontal: string[] = [];
  vertical: number[] = [];
  directions: string[] = ['East', 'South', 'West', 'North'];
  placement: PlacementType = {
    ship: '',
    horizontal: 'A',
    vertical: 1,
    direction: 'East',
  };
  points: PointType[] = [];
  errors: string[] = [];
  ready: boolean = false;
  occupied: PointType[] = [];

  shipChanged = (ev: any) => {
    this.placement.ship = this.shipsToPlace[ev.target.selectedIndex];
    this.highlightShip();
  };

  verticalChanged = (ev: any) => {
    this.placement.vertical = this.vertical[ev.target.selectedIndex];
    this.highlightShip();
  };

  horizontalChanged = (ev: any) => {
    this.placement.horizontal = this.horizontal[ev.target.selectedIndex];
    this.highlightShip();
  };

  directionChanged = (ev: any) => {
    this.placement.direction = this.directions[ev.target.selectedIndex];
    this.highlightShip();
  };

  highlightShip = () => {
    if (this.points.length) {
      for (const point of this.points) {
        const el = document.getElementById(
          `P-${point.Vertical}-${point.Horizontal}`
        );
        if (el) el.classList.remove('highlighted');
      }
    }
    let idxH = this.horizontal.indexOf(this.placement.horizontal);
    let idxV = this.vertical.indexOf(this.placement.vertical);
    this.points = [];
    this.errors = [];
    const size = ShipTypeLength[this.placement.ship];
    while (this.points.length < size && this.errors.length == 0) {
      if (idxH < 0 || idxH >= this.axis) {
        this.errors.push('Ship crosses horizontal boundary');
        continue;
      }
      if (idxV < 0 || idxV >= this.axis) {
        this.errors.push('Ship crosses vertical boundary');
        continue;
      }
      const Vertical = this.vertical[idxV];
      const Horizontal = this.horizontal[idxH];
      if (
        this.occupied.find(
          (p) => p.Horizontal == Horizontal && p.Vertical == Vertical
        )
      ) {
        this.errors.push('Ship crosses previously placed ship');
        continue;
      }
      this.points.push({ Vertical, Horizontal });
      const el = document.getElementById(`P-${Vertical}-${Horizontal}`);
      if (el) el.classList.add('highlighted');
      switch (this.placement.direction) {
        case 'North':
          idxV--;
          break;
        case 'South':
          idxV++;
          break;
        case 'East':
          idxH++;
          break;
        case 'West':
          idxH--;
          break;
      }
    }
    this.ready = this.errors.length == 0;
  };

  placeShipClicked = () => {
    const { ship } = this.placement;
    const { points } = this;
    this.placeShip.emit({ ship, points });
    for (const point of points) {
      this.occupied.push(point);
      const el = document.getElementById(
        `P-${point.Vertical}-${point.Horizontal}`
      );
      if (el) el.classList.add('occupied');
    }
    this.points = [];
    this.placement.horizontal = this.horizontal[0];
    this.placement.vertical = this.vertical[0];
    this.placement.direction = this.directions[0];
  };

  ngOnInit(): void {
    this.horizontal = SeaBattleMaxAxis.H.slice(0, this.axis);
    this.vertical = SeaBattleMaxAxis.V.slice(0, this.axis);
    this.placement.ship = this.shipsToPlace[0] || '';
    this.placement.horizontal = this.horizontal[0];
    this.placement.vertical = this.vertical[0];
    this.placement.direction = this.directions[0];
    setTimeout(() => {
      this.highlightShip();
    }, 100);
  }
}
