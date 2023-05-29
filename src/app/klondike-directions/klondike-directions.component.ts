import { Component } from '@angular/core';

@Component({
  selector: 'app-klondike-directions',
  templateUrl: './klondike-directions.component.html',
  styleUrls: ['./klondike-directions.component.css']
})
export class KlondikeDirectionsComponent {
  private readonly contentId = 'klondike-directions-content';

  toggle = () => {
    const content = document.getElementById(this.contentId);
    if (content) content.classList.toggle('open');
  };
}
