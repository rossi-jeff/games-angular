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

  ngOnInit(): void {
    this.api
      .get({ path: paginatedPath({ path: 'api/yacht' }) })
      .subscribe((result: any) => {
        const { Items, Count, Limit, Offset } = result;
        this.data = { Items, Count, Limit, Offset };
      });
  }
}
