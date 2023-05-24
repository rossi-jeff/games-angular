import { Component } from '@angular/core';
import { SeaBattle } from '../../types/sea-battle.type';
import { ApiService } from '../api.service';
import { PointType } from '../../types/point-type.type';
import { ShipTypeLength } from '../../enum/ship-type.enum';
import { Navy } from '../../enum/navy.enum';
import { SeaBattleShip } from '../../types/sea-batte-ship.type';
import { SeaBattleTurn } from '../../types/sea-battle-turn.type';
import { UserSessionStorage } from '../../lib/user-session.storage';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sea-battle',
  templateUrl: './sea-battle.component.html',
  styleUrls: ['./sea-battle.component.css'],
})
export class SeaBattleComponent {
  game: SeaBattle = {};
  shipsToPlace: string[] = [];
  axis: number = 8;
  playerShips: SeaBattleShip[] = [];
  playerTurns: SeaBattleTurn[] = [];
  opponentShips: SeaBattleShip[] = [];
  opponentTurns: SeaBattleTurn[] = [];
  navy: Navy = Navy.Player;
  hasFired: boolean = false;
  session: UserSessionStorage = new UserSessionStorage();

  constructor(private api: ApiService, private titleService: Title) {
    this.titleService.setTitle('Sea Battle');
  }

  newGame = async (ev: any) => {
    const { axis: Axis, ships } = ev;
    this.shipsToPlace = [];
    this.axis = Axis;
    for (const key in ships) {
      for (let i = 0; i < ships[key]; i++) this.shipsToPlace.push(key);
    }
    this.api
      .post({
        path: 'api/sea_battle',
        body: { Axis },
        token: this.session.data.Token || '',
      })
      .subscribe((result) => (this.game = result));
  };

  placeShip = (ev: any) => {
    const { ship, points } = ev;
    const current = [...this.shipsToPlace];
    const idx = current.indexOf(ship);
    if (idx != -1) {
      current.splice(idx, 1);
      this.shipsToPlace = current;
    }
    const size = ShipTypeLength[ship];
    this.placePlayerShip(ship, size, points);
    this.placeOpponentShip(ship, size);
  };

  placePlayerShip = (ShipType: string, Size: number, Points: PointType[]) => {
    if (!this.game.id) return;
    this.api
      .post({
        path: `api/sea_battle/${this.game.id}/ship`,
        body: { ShipType, Size, Points, Navy: Navy.Player },
      })
      .subscribe(() => this.reloadGame());
  };

  placeOpponentShip = (ShipType: string, Size: number) => {
    if (!this.game.id) return;
    this.api
      .post({
        path: `api/sea_battle/${this.game.id}/ship`,
        body: { ShipType, Size, Navy: Navy.Opponent },
      })
      .subscribe(() => this.reloadGame());
  };

  playerFire = (ev: any) => {
    if (!this.game.id) return;
    const {
      navy,
      target: { Horizontal, Vertical },
    } = ev;
    this.api
      .post({
        path: `api/sea_battle/${this.game.id}/fire`,
        body: { Horizontal, Vertical, Navy: navy },
      })
      .subscribe(() => {
        this.reloadGame();
        this.hasFired = true;
      });
  };

  opponentFire = (ev: any) => {
    if (!this.game.id) return;
    const { navy } = ev;
    this.api
      .post({
        path: `api/sea_battle/${this.game.id}/fire`,
        body: { Navy: navy },
      })
      .subscribe(() => {
        this.reloadGame();
        this.hasFired = true;
      });
  };

  toggleTurn = () => {
    this.navy = this.navy == Navy.Player ? Navy.Opponent : Navy.Player;
    this.hasFired = false;
  };

  reloadGame = async () => {
    if (!this.game.id) return;
    this.api
      .get({ path: `api/sea_battle/${this.game.id}` })
      .subscribe((result) => {
        this.game = result;
        if (this.game.ships) {
          this.playerShips = this.game.ships.filter(
            (s) => s.Navy == Navy.Player
          );
          this.opponentShips = this.game.ships.filter(
            (s) => s.Navy == Navy.Opponent
          );
        }
        if (this.game.turns) {
          this.playerTurns = this.game.turns.filter(
            (t) => t.Navy == Navy.Player
          );
          this.opponentTurns = this.game.turns.filter(
            (t) => t.Navy == Navy.Opponent
          );
        }
      });
  };
}
