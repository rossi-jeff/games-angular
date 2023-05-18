import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { SeaBattle } from '../../types/sea-battle.type';
import { SeaBattleShip } from '../../types/sea-batte-ship.type';
import { SeaBattleTurn } from '../../types/sea-battle-turn.type';
import { Navy } from '../../enum/navy.enum';

@Component({
  selector: 'app-sea-battle-score-details',
  templateUrl: './sea-battle-score-details.component.html',
  styleUrls: ['./sea-battle-score-details.component.css'],
})
export class SeaBattleScoreDetailsComponent implements OnInit {
  id!: string;
  seaBattle: SeaBattle = {};
  playerShips: SeaBattleShip[] = [];
  playerTurns: SeaBattleTurn[] = [];
  opponentShips: SeaBattleShip[] = [];
  opponentTurns: SeaBattleTurn[] = [];

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id) {
      this.api
        .get({ path: `api/sea_battle/${this.id}` })
        .subscribe((result) => {
          this.seaBattle = result;
          if (this.seaBattle.ships) {
            this.playerShips = this.seaBattle.ships.filter(
              (s) => s.Navy == Navy.Player
            );
            this.opponentShips = this.seaBattle.ships.filter(
              (s) => s.Navy == Navy.Opponent
            );
          }
          if (this.seaBattle.turns) {
            this.playerTurns = this.seaBattle.turns.filter(
              (t) => t.Navy == Navy.Player
            );
            this.opponentTurns = this.seaBattle.turns.filter(
              (t) => t.Navy == Navy.Opponent
            );
          }
        });
    }
  }
}
