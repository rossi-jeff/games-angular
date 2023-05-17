import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-guess-word-options',
  templateUrl: './guess-word-options.component.html',
  styleUrls: ['./guess-word-options.component.css'],
})
export class GuessWordOptionsComponent {
  lengths: number[] = [4, 5, 6, 7, 8, 9, 10];
  Length: number = 5;
  @Output() newGame = new EventEmitter<number>();

  lengthChanged = (ev: any) => {
    this.Length = this.lengths[ev.target.selectedIndex];
  };

  newGameClicked = () => {
    this.newGame.emit(this.Length);
  };
}
