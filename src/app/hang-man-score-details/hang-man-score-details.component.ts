import { Component, OnInit } from '@angular/core';
import { HangMan } from '../../types/hang-man.type';
import { Word } from '../../types/word.type';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hang-man-score-details',
  templateUrl: './hang-man-score-details.component.html',
  styleUrls: ['./hang-man-score-details.component.css'],
})
export class HangManScoreDetailsComponent implements OnInit {
  id!: string;
  word: Word = {};
  hangMan: HangMan = {};

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private titleService: Title
  ) {
    this.titleService.setTitle('Hang Man Score Details');
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id) {
      this.api.get({ path: `api/hang_man/${this.id}` }).subscribe((result) => {
        this.hangMan = result;
        if (this.hangMan.word) this.word = this.hangMan.word;
      });
    }
  }
}
