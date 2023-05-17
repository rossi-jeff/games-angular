import { Component, Input } from '@angular/core';
import { CodeBreakerGuess } from 'src/types/code-breaker-guess.type';

@Component({
  selector: 'app-code-breaker-guess-list',
  templateUrl: './code-breaker-guess-list.component.html',
  styleUrls: ['./code-breaker-guess-list.component.css'],
})
export class CodeBreakerGuessListComponent {
  @Input() guesses!: CodeBreakerGuess[];
}
