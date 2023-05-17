import { Component, Input } from '@angular/core';
import { CodeBreaker } from '../../types/code-breaker.type';

@Component({
  selector: 'app-code-breaker-score-row',
  templateUrl: './code-breaker-score-row.component.html',
  styleUrls: ['./code-breaker-score-row.component.css'],
})
export class CodeBreakerScoreRowComponent {
  @Input()
  codeBreaker!: CodeBreaker;
}
