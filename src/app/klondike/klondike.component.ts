import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Deck } from '../../lib/deck.class';
import { Card, CardContainer } from '../../lib/card.class';
import { Clock } from '../../lib/clock.class';
import { Klondike } from '../../types/klondike.type';

@Component({
  selector: 'app-klondike',
  templateUrl: './klondike.component.html',
  styleUrls: ['./klondike.component.css'],
})
export class KlondikeComponent {
  game: Klondike = {};
  deck: Deck = new Deck();
  aces: CardContainer = {};
  stock: Card[] = [];
  waste: Card[] = [];
  tableau: CardContainer = {};
  card: Card | undefined;
  canAutoComplete: boolean = false;
  moves: number = 0;
  clock: Clock = new Clock();

  constructor(private api: ApiService) {}

  deal = () => {
    this.deck = new Deck();
    this.deck.preload();
    this.deck.shuffle();
    this.stock = [];
    this.waste = [];
    for (let i = 0; i < 4; i++) {
      this.aces[i] = [];
    }
    for (let i = 0; i < 7; i++) {
      this.tableau[i] = [];
    }
    for (let i = 0; i < 7; i++) {
      for (let j = i; j < 7; j++) {
        this.card = this.deck.draw();
        if (this.card) {
          if (i == j) {
            this.card.facedown = false;
            this.card.draggable = true;
          }
          this.tableau[j].push(this.card);
        }
      }
    }
    while (this.deck.cards.length) {
      this.card = this.deck.draw();
      if (this.card) {
        this.card.clickable = true;
        this.stock.push(this.card);
      }
    }
  };

  quit = () => {};

  autoComplete = () => {};

  stockClicked = (event: any) => {
    const { id } = event;
    const cardId = parseInt(id.split('_')[2]);
    this.card = this.stock.pop();
    if (this.card) {
      if (this.card.id == cardId) {
        this.card.clickable = false;
        this.card.draggable = true;
        this.card.facedown = false;
        this.waste.push(this.card);
      } else {
        this.stock.push(this.card);
      }
    }
  };

  resetStock = () => {
    if (this.stock.length) return;
    while (this.waste.length) {
      this.card = this.waste.pop();
      if (this.card) {
        this.card.draggable = false;
        this.card.clickable = true;
        this.card.facedown = true;
        this.stock.push(this.card);
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
    if (this.canDrop(from, to, cardId)) this.moveCards(from, to, cardId);
  };

  moveCards = (from: string, to: string, cardId: number) => {
    const toMove: Card[] = [];
    const [fromType, fromIdx] = from.split('-');
    const [toType, toIdx] = to.split('-');
    let card: Card | undefined;
    let complete = false;
    let fromStack: Card[] = [];
    switch (fromType) {
      case 'waste':
        while (!complete) {
          card = this.waste.pop();
          if (card) {
            toMove.push(card);
            if (card.id == cardId) complete = true;
          } else complete = true;
        }
        break;
      case 'aces':
        while (!complete) {
          card = this.aces[parseInt(fromIdx)].pop();
          if (card) {
            toMove.push(card);
            if (card.id == cardId) complete = true;
          } else complete = true;
        }
        break;
      case 'tableau':
        fromStack = [...this.tableau[parseInt(fromIdx)]];
        while (!complete) {
          card = fromStack.pop();
          if (card) {
            toMove.push(card);
            if (card.id == cardId) complete = true;
          } else complete = true;
        }
        if (fromStack.length > 0) {
          card = fromStack[fromStack.length - 1];
          if (card) {
            card.facedown = false;
            card.draggable = true;
          }
        }
        this.tableau[parseInt(fromIdx)] = fromStack;
        break;
    }
    switch (toType) {
      case 'aces':
        while (toMove.length) {
          card = toMove.pop();
          if (card) {
            card.draggable = false;
            this.aces[parseInt(toIdx)].push(card);
          }
        }
        break;
      case 'tableau':
        while (toMove.length) {
          card = toMove.pop();
          if (card) {
            this.tableau[parseInt(toIdx)].push(card);
          }
        }
        break;
    }
    this.moves++;
  };

  canDrop = (from: string, to: string, cardId: number) => {
    const topCard = this.getTopCard(to);
    const draggedCard = this.getDraggedCard(from, cardId);
    if (draggedCard == undefined) return false;
    const qty = this.getDraggedQuantity(from, cardId);
    const [type, _] = to.split('-');
    const { deck } = this;
    switch (type) {
      case 'aces':
        if (qty > 1) return false;
        if (topCard == undefined && draggedCard.face == 'ace') return true;
        if (
          topCard &&
          topCard.suit == draggedCard.suit &&
          deck.faces.indexOf(draggedCard.face) ==
            deck.faces.indexOf(topCard.face) + 1
        )
          return true;
        return false;
      case 'tableau':
        if (topCard == undefined && draggedCard.face == 'king') return true;
        if (
          topCard &&
          deck.color(topCard) != deck.color(draggedCard) &&
          deck.faces.indexOf(topCard.face) ==
            deck.faces.indexOf(draggedCard.face) + 1
        )
          return true;
        return false;
    }
    return false;
  };

  getDraggedQuantity = (from: string, cardId: number) => {
    let [type, index] = from.split('-');
    const num = parseInt(index);
    let idx: number = -1;
    let length: number = 0;
    switch (type) {
      case 'waste':
        idx = this.waste.findIndex((c) => c.id == cardId);
        length = this.waste.length;
        break;
      case 'aces':
        idx = this.aces[num].findIndex((c) => c.id == cardId);
        length = this.aces[num].length;
        break;
      case 'tableau':
        idx = this.tableau[num].findIndex((c) => c.id == cardId);
        length = this.tableau[num].length;
        break;
    }
    return idx == -1 ? 0 : length - idx;
  };

  getTopCard = (to: string) => {
    let card: Card | undefined;
    let [type, index] = to.split('-');
    const num = parseInt(index);
    switch (type) {
      case 'aces':
        if (this.aces[num].length) {
          card = this.aces[num][this.aces[num].length - 1];
        }
        break;
      case 'tableau':
        if (this.tableau[num].length) {
          card = this.tableau[num][this.tableau[num].length - 1];
        }
        break;
    }
    return card;
  };

  getDraggedCard = (from: string, cardId: number) => {
    let [type, index] = from.split('-');
    const num = parseInt(index);
    let card: Card | undefined;
    switch (type) {
      case 'waste':
        card = this.waste.find((c) => c.id == cardId);
        break;
      case 'aces':
        card = this.aces[num].find((c) => c.id == cardId);
        break;
      case 'tableau':
        card = this.tableau[num].find((c) => c.id == cardId);
        break;
    }
    return card;
  };
}
