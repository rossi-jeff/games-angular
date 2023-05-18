import { Component } from '@angular/core';
import { SeaBattle } from '../../types/sea-battle.type';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sea-battle',
  templateUrl: './sea-battle.component.html',
  styleUrls: ['./sea-battle.component.css'],
})
export class SeaBattleComponent {
  game: SeaBattle = {};
  shipsToPlace: string[] = [];
  axis: number = 8;

  constructor(private api: ApiService) {}

  newGame = async (ev: any) => {
    const { axis: Axis, ships } = ev;
    this.shipsToPlace = [];
    this.axis = Axis;
    for (const key in ships) {
      for (let i = 0; i < ships[key]; i++) this.shipsToPlace.push(key);
    }
    this.api
      .post({ path: 'api/sea_battle', body: { Axis } })
      .subscribe((result) => (this.game = result));
  };

  placeShip = (ev: any) => {
    const { ship, points } = ev;
    const idx = this.shipsToPlace.indexOf(ship);
    console.log({ ship, idx, points });
    if (idx != -1)
      setTimeout(() => {
        this.shipsToPlace.splice(idx, 1);
      }, 100);
  };

  reloadGame = async () => {};
}
