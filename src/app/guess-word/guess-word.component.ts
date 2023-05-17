import { Component } from '@angular/core';
import { GuessWord } from '../../types/guess-word.type';
import { ApiService } from '../api.service';
import { Word } from '../../types/word.type';

@Component({
  selector: 'app-guess-word',
  templateUrl: './guess-word.component.html',
  styleUrls: ['./guess-word.component.css'],
})
export class GuessWordComponent {
  game: GuessWord = {};
  word: Word = {};
  Length: number = 5;

  constructor(private api: ApiService) {}

  reloadGame = async () => {
    if (!this.game.id) return;
    this.api
      .get({ path: `api/guess_word/${this.game.id}` })
      .subscribe((result) => (this.game = result));
  };

  randomWord = async (Length: number) => {
    this.Length = Length;
    this.api
      .post({ path: 'api/word/random', body: { Length } })
      .subscribe((result) => {
        this.word = result;
        if (this.word.id) this.newGame(this.word.id);
      });
  };

  newGame = async (WordId: number) => {
    this.api
      .post({ path: 'api/guess_word', body: { WordId } })
      .subscribe((result) => (this.game = result));
  };

  sendGuess = async (Guess: string) => {
    if (!this.game.id) return;
    const { Word } = this.word;
    this.api
      .post({
        path: `api/guess_word/${this.game.id}/guess`,
        body: { Guess, Word },
      })
      .subscribe(() => this.reloadGame());
  };
}
