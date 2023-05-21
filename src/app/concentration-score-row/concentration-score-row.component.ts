import { Component, Input } from '@angular/core';
import { Concentration } from '../../types/concentration.type';
import { formatElapsedSeconds } from '../../lib/clock.class';

@Component({
  selector: 'app-concentration-score-row',
  templateUrl: './concentration-score-row.component.html',
  styleUrls: ['./concentration-score-row.component.css'],
})
export class ConcentrationScoreRowComponent {
  @Input() concentration!: Concentration;

  formatSeconds = (elapsed: number) => {
    return formatElapsedSeconds(elapsed);
  };
}
