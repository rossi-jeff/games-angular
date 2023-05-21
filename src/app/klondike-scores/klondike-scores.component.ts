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

  ngOnInit(): void {
    this.api
      .get({ path: paginatedPath({ path: 'api/klondike' }) })
      .subscribe((result: any) => {
        const { Items, Count, Limit, Offset } = result;
        this.data = { Items, Count, Limit, Offset };
      });
  }
}
