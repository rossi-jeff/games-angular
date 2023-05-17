import { Component, OnInit } from '@angular/core';
import {
  defaultLimit,
  defaultOffset,
  paginatedPath,
} from '../../lib/paginated-path';
import { CodeBreaker } from '../../types/code-breaker.type';
import { ApiService } from '../api.service';

type DataType = {
  Items: CodeBreaker[];
  Count: number;
  Limit: number;
  Offset: number;
};

@Component({
  selector: 'app-code-breaker-scores',
  templateUrl: './code-breaker-scores.component.html',
  styleUrls: ['./code-breaker-scores.component.css'],
})
export class CodeBreakerScoresComponent implements OnInit {
  data: DataType = {
    Items: [],
    Count: 0,
    Limit: defaultLimit,
    Offset: defaultOffset,
  };

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api
      .get({ path: paginatedPath({ path: 'api/code_breaker' }) })
      .subscribe((result: any) => {
        const { Items, Count, Limit, Offset } = result;
        this.data = { Items, Count, Limit, Offset };
      });
  }
}
