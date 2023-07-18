import { Component } from '@angular/core';

@Component({
  selector: 'app-spider-directions',
  templateUrl: './spider-directions.component.html',
  styleUrls: ['./spider-directions.component.css'],
})
export class SpiderDirectionsComponent {
  private readonly contentId = 'spider-directions-content';

  toggle = () => {
    const content = document.getElementById(this.contentId);
    if (content) content.classList.toggle('open');
  };
}
