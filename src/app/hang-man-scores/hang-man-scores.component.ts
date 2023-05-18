import { Component, OnInit } from '@angular/core';
import { HangMan } from '../../types/hang-man.type';
import {
  defaultLimit,
  defaultOffset,
  paginatedPath,
} from '../../lib/paginated-path';
import { ApiService } from '../api.service';

type DataType = {
  Items: HangMan[];
  Count: number;
  Limit: number;
  Offset: number;
};

@Component({
  selector: 'app-hang-man-scores',
  templateUrl: './hang-man-scores.component.html',
  styleUrls: ['./hang-man-scores.component.css'],
})
export class HangManScoresComponent implements OnInit {
  data: DataType = {
    Items: [],
    Count: 0,
    Limit: defaultLimit,
    Offset: defaultOffset,
  };

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api
      .get({ path: paginatedPath({ path: 'api/hang_man' }) })
      .subscribe((result: any) => {
        const { Items, Count, Limit, Offset } = result;
        this.data = { Items, Count, Limit, Offset };
      });
  }
}
