import { Component, EventEmitter, Output } from '@angular/core';
import { ColorArray } from 'src/enum/color.enum';

type SelectedType = { Colors: string[]; Columns: number };

@Component({
  selector: 'app-code-breaker-options',
  templateUrl: './code-breaker-options.component.html',
  styleUrls: ['./code-breaker-options.component.css'],
})
export class CodeBreakerOptionsComponent {
  @Output() newGame = new EventEmitter<SelectedType>();
  colors: string[] = ColorArray;
  columns: number[] = [4, 5, 6, 7, 8];
  selected: SelectedType = {
    Colors: [],
    Columns: 4,
  };

  checkBoxChanged = (ev: any) => {
    const { value: color, checked } = ev.target;
    if (checked) {
      this.selected.Colors.push(color);
    } else {
      const idx = this.selected.Colors.indexOf(color);
      if (idx != -1) this.selected.Colors.splice(idx, 1);
    }
  };

  selectChanged = (ev: any) => {
    this.selected.Columns = this.columns[ev.target.selectedIndex];
  };

  newGameClicked = () => {
    this.newGame.emit(this.selected);
  };
}
