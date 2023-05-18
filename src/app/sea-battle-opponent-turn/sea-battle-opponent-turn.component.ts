import { Component, Input } from '@angular/core';
import { SeaBattleShip } from '../../types/sea-batte-ship.type';
import { SeaBattleTurn } from '../../types/sea-battle-turn.type';
import { SeaBattleMaxAxis } from '../../lib/sea-battle-max-axis';

@Component({
  selector: 'app-sea-battle-opponent-turn',
  templateUrl: './sea-battle-opponent-turn.component.html',
  styleUrls: ['./sea-battle-opponent-turn.component.css'],
})
export class SeaBattleOpponentTurnComponent {
  private _ships!: SeaBattleShip[];
  private _turns!: SeaBattleTurn[];
  private _axis!: number;
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
    this.drawShips();
  }
  get ships() {
    return this._ships;
  }
  @Input()
  set turns(value: SeaBattleTurn[]) {
    this._turns = value;
  }
  get turns() {
    return this._turns;
  }
  horizontal: string[] = [];
  vertical: number[] = [];

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
}
