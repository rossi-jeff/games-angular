import { Component, Input } from '@angular/core';
import { GuessWord } from '../../types/guess-word.type';

@Component({
  selector: 'app-guess-word-score-row',
  templateUrl: './guess-word-score-row.component.html',
  styleUrls: ['./guess-word-score-row.component.css'],
})
export class GuessWordScoreRowComponent {
  @Input() guessWord!: GuessWord;
}
