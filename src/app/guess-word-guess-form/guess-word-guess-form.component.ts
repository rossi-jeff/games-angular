import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-guess-word-guess-form',
  templateUrl: './guess-word-guess-form.component.html',
  styleUrls: ['./guess-word-guess-form.component.css'],
})
export class GuessWordGuessFormComponent implements OnInit {
  @Input() columns!: number;
  @Output() sendGuess = new EventEmitter<string>();
  selected: string[] = [];
  ready: boolean = false;

  focusNext = (ev: any, idx: number) => {
    ev.preventDefault();
    const letter = ev.key;
    this.selected[idx] = letter;
    this.checkReady();
    return false;
  };

  checkReady = () => {
    let valid = true;
    for (const letter of this.selected) {
      if (letter.length == 0) valid = false;
    }
    this.ready = valid;
  };

  sendGuessClicked = () => {
    const guess: string = this.selected.join('').toLowerCase();
    if (guess.length == this.columns) {
      this.sendGuess.emit(guess);
      this.clearSelected();
    }
  };

  clearSelected = () => {
    this.selected = new Array(this.columns).fill('');
  };

  ngOnInit(): void {
    this.clearSelected();
  }
}
