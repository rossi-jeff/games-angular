import { Component } from '@angular/core';

@Component({
  selector: 'app-concentration-directions',
  templateUrl: './concentration-directions.component.html',
  styleUrls: ['./concentration-directions.component.css']
})
export class ConcentrationDirectionsComponent {
  private readonly contentId = 'concentration-directions-content';

  toggle = () => {
    const content = document.getElementById(this.contentId);
    if (content) content.classList.toggle('open');
  };
}
