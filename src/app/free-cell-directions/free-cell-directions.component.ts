import { Component } from '@angular/core';

@Component({
  selector: 'app-free-cell-directions',
  templateUrl: './free-cell-directions.component.html',
  styleUrls: ['./free-cell-directions.component.css']
})
export class FreeCellDirectionsComponent {
  private readonly contentId = 'free-cell-directions-content';

  toggle = () => {
    const content = document.getElementById(this.contentId);
    if (content) content.classList.toggle('open');
  };
}
