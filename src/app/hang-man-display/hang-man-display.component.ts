import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hang-man-display',
  templateUrl: './hang-man-display.component.html',
  styleUrls: ['./hang-man-display.component.css'],
})
export class HangManDisplayComponent {
  private _word!: string;
  private _correct!: string;
  @Input()
  set word(value: string) {
    this._word = value;
    this.letters = new Array(value.length).fill('');
  }
  get word() {
    return this._word;
  }
  @Input()
  set correct(value: string) {
    this._correct = value;
    this.updateLetters();
  }
  get correct() {
    return this._correct;
  }
  letters: string[] = [];

  updateLetters = () => {
    const correctArr = this.correct
      .toUpperCase()
      .split(',')
      .filter((l) => l.length == 1);
    for (let i = 0; i < this.word.length; i++) {
      const letter = this.word[i].toUpperCase();
      if (correctArr.includes(letter)) this.letters[i] = letter;
    }
  };
}
