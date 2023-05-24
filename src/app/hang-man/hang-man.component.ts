import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { HangMan } from '../../types/hang-man.type';
import { Word } from '../../types/word.type';
import { UserSessionStorage } from '../../lib/user-session.storage';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hang-man',
  templateUrl: './hang-man.component.html',
  styleUrls: ['./hang-man.component.css'],
})
export class HangManComponent {
  game: HangMan = {};
  word: Word = {};
  session: UserSessionStorage = new UserSessionStorage();

  constructor(private api: ApiService, private titleService: Title) {
    this.titleService.setTitle('Hang Man');
  }

  randomWord = (ev: any) => {
    const { Min, Max } = ev;
    this.api
      .post({ path: 'api/word/random', body: { Min, Max } })
      .subscribe((result) => {
        this.word = result;
        if (this.word.id) this.newGame(this.word.id);
      });
  };

  newGame = (WordId: number) => {
    this.api
      .post({
        path: 'api/hang_man',
        body: { WordId },
        token: this.session.data.Token || '',
      })
      .subscribe((result) => (this.game = result));
  };

  sendGuess = (ev: any) => {
    const Letter = ev.Letter.toLowerCase();
    const { Word } = this.word;
    if (!Word || !Letter || !this.game.id) return;
    this.api
      .post({
        path: `api/hang_man/${this.game.id}/guess`,
        body: { Word, Letter },
      })
      .subscribe(() => this.reloadGame());
  };

  reloadGame = () => {
    const { Word } = this.word;
    if (!Word || !this.game.id) return;
    this.api
      .get({ path: `api/hang_man/${this.game.id}` })
      .subscribe((result) => (this.game = result));
  };
}
