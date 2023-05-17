import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { CodeBreaker } from '../../types/code-breaker.type';

@Component({
  selector: 'app-code-breaker-score-detail',
  templateUrl: './code-breaker-score-detail.component.html',
  styleUrls: ['./code-breaker-score-detail.component.css'],
})
export class CodeBreakerScoreDetailComponent implements OnInit {
  id!: string;
  codeBreaker: CodeBreaker = {};

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id) {
      this.api
        .get({ path: `api/code_breaker/${this.id}` })
        .subscribe((result) => (this.codeBreaker = result));
    }
  }
}
