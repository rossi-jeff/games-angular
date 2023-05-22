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

  pageChanged = (page: number) => {
    const offset = (page - 1) * this.data.Limit;
    this.loadItems(this.data.Limit, offset);
  };

  limitChanged = (limit: number) => {
    this.loadItems(limit, 0);
  };

  loadItems = (limit: number, offset: number) => {
    this.api
      .get({ path: paginatedPath({ path: 'api/sea_battle', limit, offset }) })
      .subscribe((result: any) => {
        const { Items, Count, Limit, Offset } = result;
        this.data = { Items, Count, Limit, Offset };
      });
  };

  ngOnInit(): void {
    this.loadItems(defaultLimit, defaultOffset);
  }
}
