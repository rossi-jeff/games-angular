import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hang-man-word',
  templateUrl: './hang-man-word.component.html',
  styleUrls: ['./hang-man-word.component.css'],
})
export class HangManWordComponent {
  private _word!: string;
  @Input()
  set word(value: string) {
    this._word = value.toUpperCase();
  }
  get word() {
    return this._word;
  }
}
