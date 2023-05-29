import { Component } from '@angular/core';

@Component({
  selector: 'app-guess-word-directions',
  templateUrl: './guess-word-directions.component.html',
  styleUrls: ['./guess-word-directions.component.css'],
})
export class GuessWordDirectionsComponent {
  private readonly contentId = 'guess-word-directions-content';

  toggle = () => {
    const content = document.getElementById(this.contentId);
    if (content) content.classList.toggle('open');
  };
}
