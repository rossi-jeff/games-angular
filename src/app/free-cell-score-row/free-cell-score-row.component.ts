import { Component, Input } from '@angular/core';
import { FreeCell } from '../../types/free-cell.type';
import { formatElapsedSeconds } from '../../lib/clock.class';

@Component({
  selector: 'app-free-cell-score-row',
  templateUrl: './free-cell-score-row.component.html',
  styleUrls: ['./free-cell-score-row.component.css'],
})
export class FreeCellScoreRowComponent {
  @Input() freeCell!: FreeCell;

  formatSeconds = (elapsed: number) => {
    return formatElapsedSeconds(elapsed);
  };
}
