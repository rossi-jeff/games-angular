import { Component } from '@angular/core';

@Component({
  selector: 'app-ten-grand-directions',
  templateUrl: './ten-grand-directions.component.html',
  styleUrls: ['./ten-grand-directions.component.css'],
})
export class TenGrandDirectionsComponent {
  private readonly contentId = 'ten-grand-directions-content';

  multiples: number[][] = [
    [1, 1000, 2000, 4000, 8000],
    [2, 200, 400, 800, 1600],
    [3, 300, 600, 1200, 2400],
    [4, 400, 800, 1600, 3200],
    [5, 500, 1000, 2000, 4000],
    [6, 600, 1200, 2400, 4800],
  ];

  toggle = () => {
    const content = document.getElementById(this.contentId);
    if (content) content.classList.toggle('open');
  };
}
