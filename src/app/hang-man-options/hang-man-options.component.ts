import { Component, Output, EventEmitter } from '@angular/core';

type SelectedType = { Min: number; Max: number };

@Component({
  selector: 'app-hang-man-options',
  templateUrl: './hang-man-options.component.html',
  styleUrls: ['./hang-man-options.component.css'],
})
export class HangManOptionsComponent {
  lengths = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  selected: SelectedType = {
    Min: 6,
    Max: 12,
  };
  @Output() newGame = new EventEmitter<SelectedType>();

  lengthChanged = (ev: any) => {
    const { name, selectedIndex } = ev.target;
    if (name == 'min-select') {
      this.selected.Min = this.lengths[selectedIndex];
      if (this.selected.Min > this.selected.Max)
        this.selected.Max = this.selected.Min;
    } else {
      this.selected.Max = this.lengths[selectedIndex];
      if (this.selected.Max < this.selected.Min)
        this.selected.Min = this.selected.Max;
    }
  };

  newGameClicked = () => {
    const { selected } = this;
    this.newGame.emit(selected);
  };
}
