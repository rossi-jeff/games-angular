import { Component, EventEmitter, Input, Output } from '@angular/core';

type RollType = {
  Keep: number[];
};

@Component({
  selector: 'app-yacht-roll',
  templateUrl: './yacht-roll.component.html',
  styleUrls: ['./yacht-roll.component.css'],
})
export class YachtRollComponent {
  private _roll!: string;
  private _flag!: boolean;
  @Input()
  set roll(value: string) {
    this._roll = value;
    this.dice = value.split(',').map((d) => parseInt(d));
  }
  get roll() {
    return this._roll;
  }
  @Input()
  set flag(value: boolean) {
    this._flag = value;
  }
  get flag() {
    return this._flag;
  }
  @Input() label!: string;
  @Input() heading!: string;
  dice: number[] = [];
  Keep: number[] = [];
  selected: number[] = [];
  @Output() rollDice = new EventEmitter<RollType>();

  checkChanged = (ev: any) => {
    let { value, checked } = ev.target;
    value = parseInt(value);
    if (checked) {
      this.selected.push(value);
    } else {
      const idx = this.selected.indexOf(value);
      if (idx != -1) this.selected.splice(idx, 1);
    }
    this.Keep = [];
    for (const idx of this.selected) {
      this.Keep.push(this.dice[idx]);
    }
  };

  rollClicked = () => {
    const { Keep } = this;
    this.rollDice.emit({ Keep });
  };
}
