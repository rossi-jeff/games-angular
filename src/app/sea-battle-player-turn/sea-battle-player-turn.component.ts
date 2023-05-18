import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SeaBattleShip } from '../../types/sea-batte-ship.type';
import { SeaBattleTurn } from '../../types/sea-battle-turn.type';
import { SeaBattleMaxAxis } from '../../lib/sea-battle-max-axis';
import { PointType } from '../../types/point-type.type';
import { Navy } from '../../enum/navy.enum';

type FireType = {
  target: PointType;
  navy: Navy;
};

@Component({
  selector: 'app-sea-battle-player-turn',
  templateUrl: './sea-battle-player-turn.component.html',
  styleUrls: ['./sea-battle-player-turn.component.css'],
})
export class SeaBattlePlayerTurnComponent implements OnInit {
  private _ships!: SeaBattleShip[];
  private _turns!: SeaBattleTurn[];
  private _axis!: number;
  private _hasFired!: boolean;
  @Input()
  set axis(value: number) {
    this._axis = value;
    this.horizontal = SeaBattleMaxAxis.H.slice(0, value);
    this.vertical = SeaBattleMaxAxis.V.slice(0, value);
  }
  get axis() {
    return this._axis;
  }
  @Input()
  set ships(value: SeaBattleShip[]) {
    this._ships = value;
  }
  get ships() {
    return this._ships;
  }
  @Input()
  set turns(value: SeaBattleTurn[]) {
    this._turns = value;
    setTimeout(() => {
      this.drawTurns();
    }, 100);
  }
  get turns() {
    return this._turns;
  }
  @Input()
  set hasFired(value: boolean) {
    this._hasFired = value;
  }
  get hasFired() {
    return this._hasFired;
  }
  horizontal: string[] = [];
  vertical: number[] = [];
  target: PointType = {
    Horizontal: 'A',
    Vertical: 1,
  };
  highlighted: PointType = {
    Horizontal: 'A',
    Vertical: 1,
  };
  navy: Navy = Navy.Player;
  @Output() fire = new EventEmitter<FireType>();
  @Output() toggle = new EventEmitter();

  verticalChanged = (ev: any) => {
    this.target.Vertical = this.vertical[ev.target.selectedIndex];
    this.highlightTarget();
  };

  horizontalChanged = (ev: any) => {
    this.target.Horizontal = this.horizontal[ev.target.selectedIndex];
    this.highlightTarget();
  };

  highlightTarget = () => {
    let el;
    if (
      this.highlighted &&
      this.highlighted.Horizontal &&
      this.highlighted.Vertical
    ) {
      el = document.getElementById(
        `PT-${this.highlighted.Vertical}-${this.highlighted.Horizontal}`
      );
      if (el) el.classList.remove('highlighted');
    }
    el = document.getElementById(
      `PT-${this.target.Vertical}-${this.target.Horizontal}`
    );
    if (el) el.classList.add('highlighted');
    this.highlighted.Horizontal = this.target.Horizontal;
    this.highlighted.Vertical = this.target.Vertical;
  };

  fireClicked = () => {
    const { target, navy } = this;
    this.fire.emit({ target, navy });
    this.target.Horizontal = this.horizontal[0];
    this.target.Vertical = this.vertical[0];
    if (
      this.highlighted &&
      this.highlighted.Horizontal &&
      this.highlighted.Vertical
    ) {
      const el = document.getElementById(
        `PT-${this.highlighted.Vertical}-${this.highlighted.Horizontal}`
      );
      if (el) el.classList.remove('highlighted');
    }
  };

  toggleClicked = () => {
    this.toggle.emit();
  };

  drawTurns = () => {
    if (this.turns.length) {
      let el;
      for (const turn of this.turns) {
        if (turn.Target) {
          el = document.getElementById(
            `PT-${turn.Vertical}-${turn.Horizontal}`
          );
          if (el) el.classList.add(turn.Target);
        }
      }
    }
  };

  ngOnInit(): void {
    setTimeout(() => {
      this.highlightTarget();
      this.drawTurns();
    }, 100);
  }
}
