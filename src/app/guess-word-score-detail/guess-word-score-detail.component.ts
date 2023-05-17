import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { GuessWord } from '../../types/guess-word.type';

@Component({
  selector: 'app-guess-word-score-detail',
  templateUrl: './guess-word-score-detail.component.html',
  styleUrls: ['./guess-word-score-detail.component.css'],
})
export class GuessWordScoreDetailComponent implements OnInit {
  id!: string;
  guessWord: GuessWord = {};

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id) {
      this.api
        .get({ path: `api/guess_word/${this.id}` })
        .subscribe((result) => (this.guessWord = result));
    }
  }
}
