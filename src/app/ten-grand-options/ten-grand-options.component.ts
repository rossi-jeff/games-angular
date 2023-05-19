import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TenGrandOption } from '../../types/ten-grand-option.type';

type ScoreType = {
  Options: TenGrandOption[];
};

@Component({
  selector: 'app-ten-grand-options',
  templateUrl: './ten-grand-options.component.html',
  styleUrls: ['./ten-grand-options.component.css'],
})
export class TenGrandOptionsComponent {
  private _options!: TenGrandOption[];
  @Input()
  set options(value: TenGrandOption[]) {
    this._options = value;
  }
  get options() {
    return this._options;
  }
  selected: TenGrandOption[] = [];
  indicees: number[] = [];
  @Output() score = new EventEmitter<ScoreType>();

  checkboxChecked = (ev: any) => {
    let { value, checked } = ev.target;
    value = parseInt(value);
    if (checked) {
      this.indicees.push(value);
    } else {
      const idx = this.indicees.indexOf(value);
      if (idx != -1) this.indicees.splice(idx, 1);
    }
    this.selected = [];
    for (const idx of this.indicees) {
      this.selected.push(this.options[idx]);
    }
  };

  scoreClicked = () => {
    const { selected: Options } = this;
    if (!Options.length) return;
    this.score.emit({ Options });
  };
}
