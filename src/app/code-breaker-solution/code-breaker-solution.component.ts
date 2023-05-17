import { Component, Input } from '@angular/core';
import { CodeBreaker } from '../../types/code-breaker.type';

@Component({
  selector: 'app-code-breaker-solution',
  templateUrl: './code-breaker-solution.component.html',
  styleUrls: ['./code-breaker-solution.component.css'],
})
export class CodeBreakerSolutionComponent {
  @Input()
  codeBreaker!: CodeBreaker;
}
