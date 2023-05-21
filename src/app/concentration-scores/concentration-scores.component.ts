import { Component, OnInit } from '@angular/core';
import { Concentration } from '../../types/concentration.type';
import {
  defaultLimit,
  defaultOffset,
  paginatedPath,
} from 'src/lib/paginated-path';
import { ApiService } from '../api.service';

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

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api
      .get({ path: paginatedPath({ path: 'api/concentration' }) })
      .subscribe((result: any) => {
        const { Items, Count, Limit, Offset } = result;
        this.data = { Items, Count, Limit, Offset };
      });
  }
}