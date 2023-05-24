import { Component } from '@angular/core';
import { GuessWord } from '../../types/guess-word.type';
import { ApiService } from '../api.service';
import { Word } from '../../types/word.type';
import { HintArgsType } from '../../types/hint-args.type';
import { UserSessionStorage } from '../../lib/user-session.storage';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-guess-word',
  templateUrl: './guess-word.component.html',
  styleUrls: ['./guess-word.component.css'],
})
export class GuessWordComponent {
  game: GuessWord = {};
  word: Word = {};
  Length: number = 5;
  showHints: boolean = false;
  hints: string[] = [];
  hintArgs: HintArgsType = {
    Length: 5,
    Green: [],
    Brown: [],
    Gray: [],
  };
  session: UserSessionStorage = new UserSessionStorage();

  constructor(private api: ApiService, private titleService: Title) {
    this.titleService.setTitle('Guess Word');
  }

  reloadGame = async () => {
    if (!this.game.id) return;
    this.api
      .get({ path: `api/guess_word/${this.game.id}` })
      .subscribe((result) => {
        this.game = result;
        this.getHints();
      });
  };

  randomWord = async (Length: number) => {
    this.Length = Length;
    this.hintArgs.Length = Length;
    this.api
      .post({ path: 'api/word/random', body: { Length } })
      .subscribe((result) => {
        this.word = result;
        if (this.word.id) this.newGame(this.word.id);
      });
  };

  newGame = async (WordId: number) => {
    this.api
      .post({
        path: 'api/guess_word',
        body: { WordId },
        token: this.session.data.Token || '',
      })
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

  getHints = async () => {
    console.log('getHints');
    if (!this.showHints) return;
    if (!this.game.id) return;
    this.buildHintArgs();
    this.api
      .post({ path: 'api/guess_word/hint', body: this.hintArgs })
      .subscribe((result: any) => (this.hints = result));
  };

  buildHintArgs = () => {
    console.log('buildHintArgs');
    this.hintArgs.Green = new Array(this.Length).fill('');
    this.hintArgs.Brown = [];
    this.hintArgs.Gray = [];
    for (let i = 0; i < this.Length; i++) this.hintArgs.Brown[i] = [];
    if (this.game.guesses) {
      for (const guess of this.game.guesses) {
        if (guess.ratings && guess.Guess) {
          for (let i = 0; i < this.Length; i++) {
            const rating = guess.ratings[i];
            const letter = guess.Guess[i];
            if (rating.Rating == 'Green') {
              this.hintArgs.Green[i] = letter;
            } else if (rating.Rating == 'Brown') {
              this.hintArgs.Brown[i].push(letter);
            } else {
              this.hintArgs.Gray.push(letter);
            }
          }
        }
      }
    }
  };
}
