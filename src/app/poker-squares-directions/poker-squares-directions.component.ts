import { Component } from '@angular/core';

@Component({
  selector: 'app-poker-squares-directions',
  templateUrl: './poker-squares-directions.component.html',
  styleUrls: ['./poker-squares-directions.component.css'],
})
export class PokerSquaresDirectionsComponent {
  private readonly contentId = 'poker-squares-directions-content';

  toggle = () => {
    const content = document.getElementById(this.contentId);
    if (content) content.classList.toggle('open');
  };
}
