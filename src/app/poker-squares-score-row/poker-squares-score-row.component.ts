import { Component, Input } from '@angular/core';
import { PokerSquare } from '../../types/poker-square.type';

@Component({
  selector: 'app-poker-squares-score-row',
  templateUrl: './poker-squares-score-row.component.html',
  styleUrls: ['./poker-squares-score-row.component.css'],
})
export class PokerSquaresScoreRowComponent {
  @Input() pokerSquare!: PokerSquare;
}
