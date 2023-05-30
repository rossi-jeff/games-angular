import { Component } from '@angular/core';

@Component({
  selector: 'app-sea-battle-directions',
  templateUrl: './sea-battle-directions.component.html',
  styleUrls: ['./sea-battle-directions.component.css']
})
export class SeaBattleDirectionsComponent {
  private readonly contentId = 'sea-battle-directions-content';

  toggle = () => {
    const content = document.getElementById(this.contentId);
    if (content) content.classList.toggle('open');
  };
}
