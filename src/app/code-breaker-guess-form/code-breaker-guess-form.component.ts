import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-code-breaker-guess-form',
  templateUrl: './code-breaker-guess-form.component.html',
  styleUrls: ['./code-breaker-guess-form.component.css'],
})
export class CodeBreakerGuessFormComponent implements OnInit {
  @Input() columns!: number;
  @Input() available!: string[];
  @Output() sendGuess = new EventEmitter<string[]>();
  selected: string[] = [];
  ready: boolean = false;

  colorChanged = (ev: any, idx: number) => {
    const { selectedIndex } = ev.target;
    this.selected[idx] =
      selectedIndex > 0 ? this.available[selectedIndex - 1] : '';
    ev.target.className =
      selectedIndex > 0 ? this.available[selectedIndex - 1] : 'White';
    this.checkReady();
  };

  checkReady = () => {
    let valid = true;
    for (const color of this.selected) {
      if (color == '') valid = false;
    }
    this.ready = valid;
  };

  guessClicked = () => {
    this.sendGuess.emit(this.selected);
    this.selected = new Array(this.columns).fill('');
    for (let i = 0; i < this.columns; i++) {
      const el = document.getElementById(`column-${i}`) as HTMLSelectElement;
      if (el) {
        el.selectedIndex = 0;
        el.className = 'White';
      }
    }
  };

  ngOnInit(): void {
    this.selected = new Array(this.columns).fill('');
  }
}
