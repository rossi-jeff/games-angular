import { Component } from '@angular/core';

@Component({
  selector: 'app-hang-man-directions',
  templateUrl: './hang-man-directions.component.html',
  styleUrls: ['./hang-man-directions.component.css']
})
export class HangManDirectionsComponent {
  private readonly contentId = 'hang-man-directions-content';

  toggle = () => {
    const content = document.getElementById(this.contentId);
    if (content) content.classList.toggle('open');
  };
}
