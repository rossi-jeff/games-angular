import { Component, Input } from '@angular/core';
import { SeaBattleShip } from '../../types/sea-batte-ship.type';
import { SeaBattleTurn } from '../../types/sea-battle-turn.type';
import { SeaBattleMaxAxis } from '../../lib/sea-battle-max-axis';

@Component({
  selector: 'app-sea-battle-player-turn',
  templateUrl: './sea-battle-player-turn.component.html',
  styleUrls: ['./sea-battle-player-turn.component.css'],
})
export class SeaBattlePlayerTurnComponent {
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

  verticalChanged = (ev: any) => {}

  horizontalChanged = (ev: any) => {}
}
