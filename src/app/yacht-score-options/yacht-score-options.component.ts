import { Component, Input } from '@angular/core';
import { YachtScoreOption } from '../../types/yacht-score-option.type';

@Component({
  selector: 'app-yacht-score-options',
  templateUrl: './yacht-score-options.component.html',
  styleUrls: ['./yacht-score-options.component.css'],
})
export class YachtScoreOptionsComponent {
  @Input() options!: YachtScoreOption[];
}
