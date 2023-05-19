import { Component, Input } from '@angular/core';
import { YachtTurn } from '../../types/yacht-turn.type';

@Component({
  selector: 'app-yacht-score-card',
  templateUrl: './yacht-score-card.component.html',
  styleUrls: ['./yacht-score-card.component.css'],
})
export class YachtScoreCardComponent {
  @Input() turns!: YachtTurn[];
  @Input() score!: number;
}
