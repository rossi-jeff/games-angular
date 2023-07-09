import { Component, OnInit } from '@angular/core';
import { PokerSquare } from '../../types/poker-square.type';
import {
  defaultLimit,
  defaultOffset,
  paginatedPath,
} from '../../lib/paginated-path';
import { ApiService } from '../api.service';
import { Title } from '@angular/platform-browser';

type DataType = {
  Items: PokerSquare[];
  Count: number;
  Limit: number;
  Offset: number;
};

@Component({
  selector: 'app-poker-squares-scores',
  templateUrl: './poker-squares-scores.component.html',
  styleUrls: ['./poker-squares-scores.component.css'],
})
export class PokerSquaresScoresComponent implements OnInit {
  data: DataType = {
    Items: [],
    Count: 0,
    Limit: defaultLimit,
    Offset: defaultOffset,
  };

  constructor(private api: ApiService, private titleService: Title) {
    this.titleService.setTitle('Poker Squares Scores');
  }

  pageChanged = (page: number) => {
    const offset = (page - 1) * this.data.Limit;
    this.loadItems(this.data.Limit, offset);
  };

  limitChanged = (limit: number) => {
    this.loadItems(limit, 0);
  };

  loadItems = (limit: number, offset: number) => {
    this.api
      .get({ path: paginatedPath({ path: 'api/poker_square', limit, offset }) })
      .subscribe((result: any) => {
        const { Items, Count, Limit, Offset } = result;
        this.data = { Items, Count, Limit, Offset };
      });
  };

  ngOnInit(): void {
    this.loadItems(defaultLimit, defaultOffset);
  }
}
