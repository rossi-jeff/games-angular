import { Component, Input } from '@angular/core';
import { SeaBattle } from '../../types/sea-battle.type';

@Component({
  selector: 'app-sea-battle-score-row',
  templateUrl: './sea-battle-score-row.component.html',
  styleUrls: ['./sea-battle-score-row.component.css'],
})
export class SeaBattleScoreRowComponent {
  @Input() seaBattle!: SeaBattle;
}
