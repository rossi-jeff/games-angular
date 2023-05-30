import { Component } from '@angular/core';

@Component({
  selector: 'app-yacht-directions',
  templateUrl: './yacht-directions.component.html',
  styleUrls: ['./yacht-directions.component.css']
})
export class YachtDirectionsComponent {
  private readonly contentId = 'yacht-directions-content';

  toggle = () => {
    const content = document.getElementById(this.contentId);
    if (content) content.classList.toggle('open');
  };
}
