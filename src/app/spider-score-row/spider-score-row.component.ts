import { Component, Input } from '@angular/core';
import { Spider } from '../../types/spider.type';
import { formatElapsedSeconds } from '../../lib/clock.class';

@Component({
  selector: 'app-spider-score-row',
  templateUrl: './spider-score-row.component.html',
  styleUrls: ['./spider-score-row.component.css'],
})
export class SpiderScoreRowComponent {
  @Input() spider!: Spider;

  formatSeconds = (elapsed: number) => {
    return formatElapsedSeconds(elapsed);
  };
}
