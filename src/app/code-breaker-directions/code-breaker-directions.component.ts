import { Component } from '@angular/core';

@Component({
  selector: 'app-code-breaker-directions',
  templateUrl: './code-breaker-directions.component.html',
  styleUrls: ['./code-breaker-directions.component.css'],
})
export class CodeBreakerDirectionsComponent {
  private readonly contentId = 'code-breaker-directions-content';

  toggle = () => {
    const content = document.getElementById(this.contentId);
    if (content) content.classList.toggle('open');
  };
}
