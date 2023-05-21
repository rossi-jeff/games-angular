import { Component, Input } from '@angular/core';
import { Klondike } from '../../types/klondike.type';
import { formatElapsedSeconds } from '../../lib/clock.class';

@Component({
  selector: 'app-klondike-score-row',
  templateUrl: './klondike-score-row.component.html',
  styleUrls: ['./klondike-score-row.component.css'],
})
export class KlondikeScoreRowComponent {
  @Input() klondike!: Klondike;

  formatSeconds = (elapsed: number) => {
    return formatElapsedSeconds(elapsed);
  };
}
