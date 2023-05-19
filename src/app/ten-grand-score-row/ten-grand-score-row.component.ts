import { Component, Input } from '@angular/core';
import { TenGrand } from '../../types/ten-grand.type';

@Component({
  selector: 'app-ten-grand-score-row',
  templateUrl: './ten-grand-score-row.component.html',
  styleUrls: ['./ten-grand-score-row.component.css'],
})
export class TenGrandScoreRowComponent {
  @Input() tenGrand!: TenGrand;
}
