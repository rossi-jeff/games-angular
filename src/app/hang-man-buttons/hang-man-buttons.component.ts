import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { alphabet } from '../../lib/alphabet';

@Component({
  selector: 'app-hang-man-buttons',
  templateUrl: './hang-man-buttons.component.html',
  styleUrls: ['./hang-man-buttons.component.css'],
})
export class HangManButtonsComponent implements OnInit {
  private _correct!: string;
  private _wrong!: string;
  letters: string[] = alphabet.toUpperCase().split('');
  @Input()
  set correct(value: string) {
    this._correct = value;
    this.updateButtons();
  }
  get correct() {
    return this._correct;
  }
  @Input()
  set wrong(value: string) {
    this._wrong = value;
    this.updateButtons();
  }
  get wrong() {
    return this._wrong;
  }
  @Output() guess = new EventEmitter<{ Letter: string }>();

  updateButtons = () => {
    let el;
    if (this.correct == undefined || this.wrong == undefined) return;
    const correctArr = this.correct
      .toUpperCase()
      .split(',')
      .filter((l) => l.length == 1);
    const wrongArr = this.wrong
      .toUpperCase()
      .split(',')
      .filter((l) => l.length == 1);
    for (const letter of correctArr) {
      el = document.getElementById(`letter-${letter}`) as HTMLButtonElement;
      if (el) {
        el.disabled = true;
        el.classList.add('correct');
      }
    }
    for (const letter of wrongArr) {
      el = document.getElementById(`letter-${letter}`) as HTMLButtonElement;
      if (el) {
        el.disabled = true;
        el.classList.add('wrong');
      }
    }
  };

  resetButtons = () => {
    let el;
    for (const letter of this.letters) {
      el = document.getElementById(`letter-${letter}`) as HTMLButtonElement;
      if (el) {
        el.disabled = false;
        el.classList.remove('correct');
        el.classList.remove('wrong');
      }
    }
  };

  letterClicked = (Letter: string) => {
    this.guess.emit({ Letter });
  };

  ngOnInit(): void {
    this.resetButtons();
  }
}
