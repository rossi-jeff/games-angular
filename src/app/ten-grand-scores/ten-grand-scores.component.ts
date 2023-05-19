import { Component, OnInit } from '@angular/core';
import { TenGrand } from '../../types/ten-grand.type';
import {
  defaultLimit,
  defaultOffset,
  paginatedPath,
} from '../../lib/paginated-path';
import { ApiService } from '../api.service';

type DataType = {
  Items: TenGrand[];
  Count: number;
  Limit: number;
  Offset: number;
};

@Component({
  selector: 'app-ten-grand-scores',
  templateUrl: './ten-grand-scores.component.html',
  styleUrls: ['./ten-grand-scores.component.css'],
})
export class TenGrandScoresComponent implements OnInit {
  data: DataType = {
    Items: [],
    Count: 0,
    Limit: defaultLimit,
    Offset: defaultOffset,
  };

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api
      .get({ path: paginatedPath({ path: 'api/ten_grand' }) })
      .subscribe((result: any) => {
        const { Items, Count, Limit, Offset } = result;
        this.data = { Items, Count, Limit, Offset };
      });
  }
}
