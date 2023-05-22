import { Component, OnInit } from '@angular/core';
import { Klondike } from '../../types/klondike.type';
import {
  defaultLimit,
  defaultOffset,
  paginatedPath,
} from 'src/lib/paginated-path';
import { ApiService } from '../api.service';

type DataType = {
  Items: Klondike[];
  Count: number;
  Limit: number;
  Offset: number;
};

@Component({
  selector: 'app-klondike-scores',
  templateUrl: './klondike-scores.component.html',
  styleUrls: ['./klondike-scores.component.css'],
})
export class KlondikeScoresComponent implements OnInit {
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
      .get({ path: paginatedPath({ path: 'api/klondike', limit, offset }) })
      .subscribe((result: any) => {
        const { Items, Count, Limit, Offset } = result;
        this.data = { Items, Count, Limit, Offset };
      });
  };

  ngOnInit(): void {
    this.loadItems(defaultLimit, defaultOffset);
  }
}
