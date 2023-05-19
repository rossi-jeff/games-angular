import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TenGrand } from '../../types/ten-grand.type';
import { TenGrandTurn } from '../../types/ten-grand-turn.type';
import { TenGrandOption } from '../../types/ten-grand-option.type';
import { ApiService } from '../api.service';
import { TenGrandCategory } from '../../enum/ten-grand-category.enum';

@Component({
  selector: 'app-ten-grand-current-turn',
  templateUrl: './ten-grand-current-turn.component.html',
  styleUrls: ['./ten-grand-current-turn.component.css'],
})
export class TenGrandCurrentTurnComponent {
  private _game!: TenGrand;
  @Input()
  set game(value: TenGrand) {
    this._game = value;
  }
  get game() {
    return this._game;
  }
  turn: TenGrandTurn = {};
  options: TenGrandOption[] = [];
  rollDice: number[] = [];
  scoreDice: number[] = [];
  @Output() reload = new EventEmitter();

  constructor(private api: ApiService) {}

  roll = () => {
    if (!this.game.id) return;
    const Quantity = this.rollDice.length || 6;
    this.api
      .post({ path: `api/ten_grand/${this.game.id}/roll`, body: { Quantity } })
      .subscribe((result: any) => {
        this.rollDice = result;
        this.getOptions();
      });
  };

  getOptions = () => {
    const Dice = [...this.scoreDice];
    this.api
      .post({ path: 'api/ten_grand/options', body: { Dice } })
      .subscribe((result: any) => {
        const { Options } = result;
        this.options = Options;
      });
  };

  score = (ev: any) => {
    if (!this.game.id) return;
    const { Options } = ev;
    const TurnId = this.turn.id || 0;
    let Dice = [...this.scoreDice];
    let crapOut: boolean = false;
    for (const option of Options) {
      if (option.Category == TenGrandCategory.CrapOut) crapOut = true;
    }
    if (crapOut) {
      Dice = [...this.scoreDice, ...this.rollDice];
      this.rollDice = [];
    }
    this.scoreDice = [];
    this.api
      .post({
        path: `api/ten_grand/${this.game.id}/score`,
        body: { Options, TurnId, Dice },
      })
      .subscribe((result) => {
        this.turn = result;
        this.options = [];
        if (this.scoreDice.length == 0 && this.rollDice.length == 0) {
          this.turn = {};
          this.reload.emit();
        }
      });
  };

  dragStart = (event: any) => {
    if (event.target) event.dataTransfer.setData('text', event.target.id);
    else if (event.detail)
      event.detail.dataTransfer.setData('text', event.detail.target.id);
  };

  dragOver = (event: any) => {
    event.preventDefault();
  };

  dragEnter = (event: any) => {
    let { target } = event;
    if (target) {
      while (
        target &&
        !(target.id == 'roll-dice' || target.id == 'score-dice')
      ) {
        target = target.parentElement;
      }
      target.classList.add('over');
      setTimeout(() => target.classList.remove('over'), 500);
    }
  };

  drop = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    const data = event.dataTransfer.getData('text');
    let [from, val, idx] = data.split('-');
    let id: string = '';
    let { target } = event;
    if (target) {
      while (
        target &&
        !(target.id == 'roll-dice' || target.id == 'score-dice')
      ) {
        target = target.parentElement;
      }
      id = target.id;
    }
    val = parseInt(val);
    idx = parseInt(idx);
    console.log({ from, val, idx, id });
    let fromDice: number[] = [];
    let toDice: number[] = [];
    if (id == 'roll-dice') {
      if (from == 'roll') return;
      fromDice = [...this.scoreDice];
      toDice = [...this.rollDice];
      fromDice.splice(idx, 1);
      toDice.push(val);
      this.scoreDice = fromDice;
      this.rollDice = toDice;
      this.getOptions();
    } else if (id == 'score-dice') {
      if (from == 'score') return;
      fromDice = [...this.rollDice];
      toDice = [...this.scoreDice];
      fromDice.splice(idx, 1);
      toDice.push(val);
      this.rollDice = fromDice;
      this.scoreDice = toDice;
      this.getOptions();
    }
  };
}
