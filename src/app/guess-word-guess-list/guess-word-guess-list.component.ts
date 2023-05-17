import { Component, Input } from '@angular/core';
import { GuessWordGuess } from '../../types/guess-word-guess.type';

@Component({
  selector: 'app-guess-word-guess-list',
  templateUrl: './guess-word-guess-list.component.html',
  styleUrls: ['./guess-word-guess-list.component.css'],
})
export class GuessWordGuessListComponent {
  @Input() guesses!: GuessWordGuess[];
}
