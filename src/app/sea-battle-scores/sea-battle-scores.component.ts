import { Component, OnInit } from '@angular/core';
import { SeaBattle } from '../../types/sea-battle.type';
import { ApiService } from '../api.service';
import {
  defaultLimit,
  defaultOffset,
  paginatedPath,
} from '../../lib/paginated-path';

type DataType = {
  Items: SeaBattle[];
  Count: number;
  Limit: number;
  Offset: number;
};

@Component({
  selector: 'app-sea-battle-scores',
  templateUrl: './sea-battle-scores.component.html',
  styleUrls: ['./sea-battle-scores.component.css'],
})
export class SeaBattleScoresComponent implements OnInit {
  data: DataType = {
    Items: [],
    Count: 0,
    Limit: defaultLimit,
    Offset: defaultOffset,
  };

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api
      .get({ path: paginatedPath({ path: 'api/sea_battle' }) })
      .subscribe((result: any) => {
        const { Items, Count, Limit, Offset } = result;
        this.data = { Items, Count, Limit, Offset };
      });
  }
}
