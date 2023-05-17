import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CodeBreaker } from '../../types/code-breaker.type';

@Component({
  selector: 'app-code-breaker',
  templateUrl: './code-breaker.component.html',
  styleUrls: ['./code-breaker.component.css'],
})
export class CodeBreakerComponent {
  game: CodeBreaker = {};
  available: string[] = [];
  columns: number = 4;

  constructor(private api: ApiService) {}

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
      .post({ path: 'api/code_breaker', body: { Colors, Columns } })
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
