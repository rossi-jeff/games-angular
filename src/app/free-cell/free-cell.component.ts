import { Component } from '@angular/core';
import { Deck } from '../../lib/deck.class';
import { Card, CardContainer } from '../../lib/card.class';

@Component({
  selector: 'app-free-cell',
  templateUrl: './free-cell.component.html',
  styleUrls: ['./free-cell.component.css'],
})
export class FreeCellComponent {
  deck: Deck = new Deck();
  free: CardContainer = {};
  aces: CardContainer = {};
  tableau: CardContainer = {};
  card: Card | undefined;

  deal = () => {
    this.deck = new Deck();
    this.deck.shuffle();
    this.deck.cards.map((c) => (c.facedown = false));
    for (let i = 0; i < 4; i++) {
      this.free[i] = [];
      this.aces[i] = [];
    }
    for (let i = 0; i < 8; i++) {
      this.tableau[i] = [];
    }
    let counter = 0;
    while (this.deck.cards.length) {
      this.card = this.deck.draw();
      if (this.card) {
        this.tableau[counter].push(this.card);
      }
      counter++;
      if (counter >= 8) counter = 0;
    }
    this.adjustDraggable();
  };

  adjustDraggable = () => {
    for (let i = 0; i < 4; i++) {
      for (const card of this.aces[i]) card.draggable = false;
      for (const card of this.free[i]) card.draggable = true;
    }
    let current: Card | undefined;
    let previous: Card | undefined;
    let last: number;
    const { deck } = this;
    for (let i = 0; i < 8; i++) {
      for (const card of this.tableau[i]) card.draggable = false;
      current = undefined;
      previous = undefined;
      last = this.tableau[i].length - 1;
      for (let j = last; j >= 0; j--) {
        current = this.tableau[i][j];
        if (j == last) current.draggable = true;
        if (
          previous &&
          deck.faces.indexOf(current.face) + 1 ==
            deck.faces.indexOf(previous.face) &&
          deck.color(previous) != deck.color(current)
        )
          current.draggable = true;
        previous = current;
      }
    }
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
      while (target && !target.classList.contains('card-container')) {
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
    let [from, level, cardId, index] = data.split('_');
    level = parseInt(level);
    index = parseInt(index);
    cardId = parseInt(cardId);
    let to = '';
    let { target } = event;
    if (target) {
      while (target && !target.classList.contains('card-container')) {
        target = target.parentElement;
      }
      to = target.id;
    }
    console.log({ from, level, cardId, index, to });
  };
}
