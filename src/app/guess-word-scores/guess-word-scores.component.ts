import { Component, OnInit } from '@angular/core';
import { GuessWord } from '../../types/guess-word.type';
import { ApiService } from '../api.service';
import {
  defaultLimit,
  defaultOffset,
  paginatedPath,
} from '../../lib/paginated-path';

type DataType = {
  Items: GuessWord[];
  Count: number;
  Limit: number;
  Offset: number;
};

@Component({
  selector: 'app-guess-word-scores',
  templateUrl: './guess-word-scores.component.html',
  styleUrls: ['./guess-word-scores.component.css'],
})
export class GuessWordScoresComponent implements OnInit {
  data: DataType = {
    Items: [],
    Count: 0,
    Limit: defaultLimit,
    Offset: defaultOffset,
  };

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api
      .get({ path: paginatedPath({ path: 'api/guess_word' }) })
      .subscribe((result: any) => {
        const { Items, Count, Limit, Offset } = result;
        this.data = { Items, Count, Limit, Offset };
      });
  }
}
