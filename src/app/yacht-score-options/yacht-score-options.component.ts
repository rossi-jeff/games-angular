import { Component, EventEmitter, Input, Output } from '@angular/core';
import { YachtScoreOption } from '../../types/yacht-score-option.type';
import { YachtCategory } from '../../enum/yacht-category.enum';

type ScoreType = { Category: YachtCategory };

@Component({
  selector: 'app-yacht-score-options',
  templateUrl: './yacht-score-options.component.html',
  styleUrls: ['./yacht-score-options.component.css'],
})
export class YachtScoreOptionsComponent {
  @Input() options!: YachtScoreOption[];
  @Output() score = new EventEmitter<ScoreType>();
  selected: number = 0;

  radioClicked = (idx: number) => {
    this.selected = idx;
  };

  scoreClicked = () => {
    const option = this.options[this.selected];
    const { Category } = option;
    if (Category) this.score.emit({ Category });
  };
}
