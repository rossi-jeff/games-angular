import { Component, Input } from '@angular/core';
import { TenGrandTurn } from '../../types/ten-grand-turn.type';

@Component({
  selector: 'app-ten-grand-turn',
  templateUrl: './ten-grand-turn.component.html',
  styleUrls: ['./ten-grand-turn.component.css'],
})
export class TenGrandTurnComponent {
  private _turn!: TenGrandTurn;
  @Input()
  set turn(value: TenGrandTurn) {
    this._turn = value;
  }
  get turn() {
    return this._turn;
  }
}
