import { Component, OnInit } from '@angular/core';
import { FreeCell } from '../../types/free-cell.type';
import {
  defaultLimit,
  defaultOffset,
  paginatedPath,
} from '../../lib/paginated-path';
import { ApiService } from '../api.service';

type DataType = {
  Items: FreeCell[];
  Count: number;
  Limit: number;
  Offset: number;
};

@Component({
  selector: 'app-free-cell-scores',
  templateUrl: './free-cell-scores.component.html',
  styleUrls: ['./free-cell-scores.component.css'],
})
export class FreeCellScoresComponent implements OnInit {
  data: DataType = {
    Items: [],
    Count: 0,
    Limit: defaultLimit,
    Offset: defaultOffset,
  };

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api
      .get({ path: paginatedPath({ path: 'api/free_cell' }) })
      .subscribe((result: any) => {
        const { Items, Count, Limit, Offset } = result;
        this.data = { Items, Count, Limit, Offset };
      });
  }
}
