import { Component, OnInit } from '@angular/core';
import { Spider } from '../../types/spider.type';
import { ApiService } from '../api.service';
import { Title } from '@angular/platform-browser';
import {
  defaultLimit,
  defaultOffset,
  paginatedPath,
} from '../../lib/paginated-path';

type DataType = {
  Items: Spider[];
  Count: number;
  Limit: number;
  Offset: number;
};

@Component({
  selector: 'app-spider-scores',
  templateUrl: './spider-scores.component.html',
  styleUrls: ['./spider-scores.component.css'],
})
export class SpiderScoresComponent implements OnInit {
  data: DataType = {
    Items: [],
    Count: 0,
    Limit: defaultLimit,
    Offset: defaultOffset,
  };

  constructor(private api: ApiService, private titleService: Title) {
    this.titleService.setTitle('Spider Scores');
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
      .get({ path: paginatedPath({ path: 'api/spider', limit, offset }) })
      .subscribe((result: any) => {
        const { Items, Count, Limit, Offset } = result;
        this.data = { Items, Count, Limit, Offset };
      });
  };

  ngOnInit(): void {
    this.loadItems(defaultLimit, defaultOffset);
  }
}