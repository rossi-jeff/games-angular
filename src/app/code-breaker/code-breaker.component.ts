import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CodeBreaker } from '../../types/code-breaker.type';
import { UserSessionStorage } from '../../lib/user-session.storage';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-code-breaker',
  templateUrl: './code-breaker.component.html',
  styleUrls: ['./code-breaker.component.css'],
})
export class CodeBreakerComponent {
  game: CodeBreaker = {};
  available: string[] = [];
  columns: number = 4;
  session: UserSessionStorage = new UserSessionStorage();

  constructor(private api: ApiService, private titleService: Title) {
    this.titleService.setTitle('Code Breaker Game')
  }

  reloadGame = async () => {
    if (!this.game.id) return;
    this.api
      .get({ path: `api/code_breaker/${this.game.id}` })
      .subscribe((result) => (this.game = result));
  };

  newGame = async (ev: any) => {
    const { Colors, Columns } = ev;
    this.available = Colors;
    this.columns = Columns;
    this.api
      .post({
        path: 'api/code_breaker',
        body: { Colors, Columns },
        token: this.session.data.Token || '',
      })
      .subscribe((result) => (this.game = result));
  };

  sendGuess = async (Colors: string[]) => {
    if (!this.game.id) return;
    this.api
      .post({
        path: `api/code_breaker/${this.game.id}/guess`,
        body: { Colors },
      })
      .subscribe(() => this.reloadGame());
  };
}
