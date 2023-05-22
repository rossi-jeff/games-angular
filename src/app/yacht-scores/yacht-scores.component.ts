import { Component, OnInit } from '@angular/core';
import { Yacht } from '../../types/yacht.type';
import { ApiService } from '../api.service';
import {
  defaultLimit,
  defaultOffset,
  paginatedPath,
} from '../../lib/paginated-path';

type DataType = {
  Items: Yacht[];
  Count: number;
  Limit: number;
  Offset: number;
};

@Component({
  selector: 'app-yacht-scores',
  templateUrl: './yacht-scores.component.html',
  styleUrls: ['./yacht-scores.component.css'],
})
export class YachtScoresComponent implements OnInit {
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
      .get({ path: paginatedPath({ path: 'api/yacht', limit, offset }) })
      .subscribe((result: any) => {
        const { Items, Count, Limit, Offset } = result;
        this.data = { Items, Count, Limit, Offset };
      });
  };

  ngOnInit(): void {
    this.loadItems(defaultLimit, defaultOffset);
  }
}
