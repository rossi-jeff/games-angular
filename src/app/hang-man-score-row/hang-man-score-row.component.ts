import { Component, Input } from '@angular/core';
import { HangMan } from '../../types/hang-man.type';

@Component({
  selector: 'app-hang-man-score-row',
  templateUrl: './hang-man-score-row.component.html',
  styleUrls: ['./hang-man-score-row.component.css'],
})
export class HangManScoreRowComponent {
  @Input() hangMan!: HangMan;
}
