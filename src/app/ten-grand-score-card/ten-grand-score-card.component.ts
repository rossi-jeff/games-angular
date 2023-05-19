import { Component, Input } from '@angular/core';
import { TenGrandTurn } from '../../types/ten-grand-turn.type';

@Component({
  selector: 'app-ten-grand-score-card',
  templateUrl: './ten-grand-score-card.component.html',
  styleUrls: ['./ten-grand-score-card.component.css'],
})
export class TenGrandScoreCardComponent {
  private _turns!: TenGrandTurn[];
  @Input()
  set turns(value: TenGrandTurn[]) {
    this._turns = value;
  }
  get turns() {
    return this._turns;
  }
}
