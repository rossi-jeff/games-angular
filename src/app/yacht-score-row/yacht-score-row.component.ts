import { Component, Input } from '@angular/core';
import { Yacht } from '../../types/yacht.type';

@Component({
  selector: 'app-yacht-score-row',
  templateUrl: './yacht-score-row.component.html',
  styleUrls: ['./yacht-score-row.component.css'],
})
export class YachtScoreRowComponent {
  @Input() yacht!: Yacht;
}
