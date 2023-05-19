import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Yacht } from '../../types/yacht.type';
import { YachtTurn } from '../../types/yacht-turn.type';
import { YachtScoreOption } from '../../types/yacht-score-option.type';
import { FlagType } from '../../types/flag-type.type';

@Component({
  selector: 'app-yacht',
  templateUrl: './yacht.component.html',
  styleUrls: ['./yacht.component.css'],
})
export class YachtComponent {
  game: Yacht = {};
  turn: YachtTurn = {};
  options: YachtScoreOption[] = [];
  flags: FlagType = {
    keepOne: false,
    keepTwo: false,
  };

  constructor(private api: ApiService) {}

  newGame = () => {
    this.api
      .post({ path: 'api/yacht', body: {} })
      .subscribe((result) => (this.game = result));
  };

  firstRoll = () => {
    this.roll([]);
  };

  secondRoll = (ev: any) => {
    const { Keep } = ev;
    this.roll(Keep);
    this.flags['keepOne'] = true;
  };

  thirdRoll = (ev: any) => {
    const { Keep } = ev;
    this.roll(Keep);
    this.flags['keepTwo'] = true;
  };

  roll = (Keep: number[]) => {
    if (!this.game.id) return;
    this.api
      .post({ path: `api/yacht/${this.game.id}/roll`, body: { Keep } })
      .subscribe((result: any) => {
        const { Turn, Options } = result;
        this.turn = Turn;
        this.options = Options;
      });
  };

  score = (ev: any) => {
    if (!this.game.id) return;
    const { Category } = ev;
    const TurnId = this.turn.id || 0;
    this.api
      .post({
        path: `api/yacht/${this.game.id}/score`,
        body: { Category, TurnId },
      })
      .subscribe(() => {
        this.turn = {};
        this.options = [];
        this.flags['keepOne'] = false;
        this.flags['keepTwo'] = false;
        this.reloadGame();
      });
  };

  reloadGame = () => {
    if (!this.game.id) return;
    this.api
      .get({ path: `api/yacht/${this.game.id}` })
      .subscribe((result) => (this.game = result));
  };
}
