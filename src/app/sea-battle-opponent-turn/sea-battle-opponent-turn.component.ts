import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { SeaBattleShip } from '../../types/sea-batte-ship.type';
import { SeaBattleTurn } from '../../types/sea-battle-turn.type';
import { SeaBattleMaxAxis } from '../../lib/sea-battle-max-axis';
import { Navy } from '../../enum/navy.enum';

type FireType = {
  navy: Navy;
};

@Component({
  selector: 'app-sea-battle-opponent-turn',
  templateUrl: './sea-battle-opponent-turn.component.html',
  styleUrls: ['./sea-battle-opponent-turn.component.css'],
})
export class SeaBattleOpponentTurnComponent implements OnInit {
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
    setTimeout(() => {
      this.drawShips();
    }, 100);
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
  navy: Navy = Navy.Opponent;
  @Output() fire = new EventEmitter<FireType>();
  @Output() toggle = new EventEmitter();

  drawShips = () => {
    for (const ship of this.ships) {
      if (ship.points) {
        for (const point of ship.points) {
          const el = document.getElementById(
            `OT-${point.Vertical}-${point.Horizontal}`
          );
          if (el) el.classList.add('occupied');
        }
      }
    }
  };

  drawTurns = () => {
    if (this.turns.length) {
      let el;
      for (const turn of this.turns) {
        if (turn.Target) {
          el = document.getElementById(
            `OT-${turn.Vertical}-${turn.Horizontal}`
          );
          if (el) el.classList.add(turn.Target);
        }
      }
    }
  };

  fireClicked = () => {
    const { navy } = this;
    this.fire.emit({ navy });
  };

  toggleClicked = () => {
    this.toggle.emit();
  };

  ngOnInit(): void {
    setTimeout(() => {
      this.drawShips();
      this.drawTurns();
    }, 100);
  }
}
