import { Component } from '@angular/core';
import { TenGrand } from '../../types/ten-grand.type';
import { ApiService } from '../api.service';
import { UserSessionStorage } from '../../lib/user-session.storage';

@Component({
  selector: 'app-ten-grand',
  templateUrl: './ten-grand.component.html',
  styleUrls: ['./ten-grand.component.css'],
})
export class TenGrandComponent {
  game: TenGrand = {};
  session: UserSessionStorage = new UserSessionStorage();

  constructor(private api: ApiService) {}

  reloadGame = () => {
    if (!this.game.id) return;
    this.api
      .get({ path: `api/ten_grand/${this.game.id}` })
      .subscribe((result) => (this.game = result));
  };

  newGame = () => {
    this.api
      .post({
        path: 'api/ten_grand',
        body: {},
        token: this.session.data.Token || '',
      })
      .subscribe((result) => (this.game = result));
  };
}
