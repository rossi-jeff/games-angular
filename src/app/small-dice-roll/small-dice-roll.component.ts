import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-dice-roll',
  templateUrl: './small-dice-roll.component.html',
  styleUrls: ['./small-dice-roll.component.css'],
})
export class SmallDiceRollComponent {
  private _roll!: string;
  dice: number[] = [];
  @Input()
  set roll(value: string) {
    this._roll = value;
    this.dice = value
      .split(',')
      .filter((d) => d.length == 1)
      .map((d) => parseInt(d));
  }
  get roll() {
    return this._roll;
  }
}
