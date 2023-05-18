import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShipTypeArray } from '../../enum/ship-type.enum';

type NewGameType = {
  axis: number;
  ships: { [key: string]: number };
};

@Component({
  selector: 'app-sea-battle-options',
  templateUrl: './sea-battle-options.component.html',
  styleUrls: ['./sea-battle-options.component.css'],
})
export class SeaBattleOptionsComponent implements OnInit {
  shipTypes: string[] = ShipTypeArray;
  perShipType: number[] = [0, 1, 2, 3];
  axes: number[] = [6, 8, 10, 12];
  axis: number = 8;
  ships: { [key: string]: number } = {};
  ready: boolean = false;

  @Output() newGame = new EventEmitter<NewGameType>();

  axisChanged = (ev: any) => {
    this.axis = this.axes[ev.target.selectedIndex];
  };

  shipChanged = (ev: any, type: string) => {
    this.ships[type] = this.perShipType[ev.target.selectedIndex];
    this.checkReady();
  };

  checkReady = () => {
    let qty = 0;
    for (const key in this.ships) {
      qty += this.ships[key];
    }
    this.ready = qty < 3 ? false : true;
  };

  newGameClicked = () => {
    const { axis, ships } = this;
    this.newGame.emit({ axis, ships });
  };

  ngOnInit(): void {
    for (const shipType of this.shipTypes) {
      this.ships[shipType] = 1;
    }
    this.checkReady();
  }
}
