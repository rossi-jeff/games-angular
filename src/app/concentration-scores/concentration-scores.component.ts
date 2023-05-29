import { Component, OnInit } from '@angular/core';
import { Concentration } from '../../types/concentration.type';
import {
  defaultLimit,
  defaultOffset,
  paginatedPath,
} from 'src/lib/paginated-path';
import { ApiService } from '../api.service';
import { Title } from '@angular/platform-browser';

type DataType = {
  Items: Concentration[];
  Count: number;
  Limit: number;
  Offset: number;
};

@Component({
  selector: 'app-concentration-scores',
  templateUrl: './concentration-scores.component.html',
  styleUrls: ['./concentration-scores.component.css'],
})
export class ConcentrationScoresComponent implements OnInit {
  data: DataType = {
    Items: [],
    Count: 0,
    Limit: defaultLimit,
    Offset: defaultOffset,
  };

  constructor(private api: ApiService, private titleService: Title) {
    this.titleService.setTitle('Concentration Scores')
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
      .get({
        path: paginatedPath({ path: 'api/concentration', limit, offset }),
      })
      .subscribe((result: any) => {
        const { Items, Count, Limit, Offset } = result;
        this.data = { Items, Count, Limit, Offset };
      });
  };

  ngOnInit(): void {
    this.loadItems(defaultLimit, defaultOffset);
  }
}
