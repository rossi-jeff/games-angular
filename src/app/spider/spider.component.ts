import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Title } from '@angular/platform-browser';
import { Card, CardContainer } from 'src/lib/card.class';
import { Deck } from 'src/lib/deck.class';
import { Clock } from 'src/lib/clock.class';
import { UserSessionStorage } from 'src/lib/user-session.storage';

@Component({
  selector: 'app-spider',
  templateUrl: './spider.component.html',
  styleUrls: ['./spider.component.css'],
})
export class SpiderComponent {
  deck: Deck = new Deck(2);
  aces: CardContainer = {};
  tableau: CardContainer = {};
  stock: Card[] = [];
  moves: number = 0;
  clock: Clock = new Clock();
  session: UserSessionStorage = new UserSessionStorage();

  constructor(private api: ApiService, private titleService: Title) {
    this.titleService.setTitle('Spider');
  }

  deal = () => {
    this.deck = new Deck(2);
    this.deck.preload();
    this.deck.shuffle();
    this.stock = [];
    for (let i = 0; i < 8; i++) {
      this.aces[i] = [];
    }
    for (let i = 0; i < 10; i++) {
      this.tableau[i] = [];
    }
    let counter = 0;
    let index = 0;
    while (counter < 54) {
      const card = this.deck.draw();
      if (card) {
        this.tableau[index].push(card);
      }
      counter++;
      index++;
      if (index >= 10) index = 0;
    }
    while (this.deck.cards.length) {
      const card = this.deck.draw();
      if (card) {
        card.clickable = true;
        this.stock.push(card);
      }
    }
    this.adjustDraggable();
  };

  adjustDraggable = () => {
    const { deck } = this;
    let current: Card | undefined, previous: Card | undefined;
    let Tableau = { ...this.tableau };
    for (let t = 0; t < 10; t++) {
      if (Tableau[t].length) {
        for (const card of Tableau[t]) card.draggable = false;
        previous = Tableau[t][Tableau[t].length - 1];
        previous.draggable = true;
        previous.facedown = false;
        if (Tableau[t].length > 1) {
          for (let i = Tableau[t].length - 2; i >= 0; i--) {
            current = Tableau[t][i];
            if (current.facedown) break;
            if (current.suit != previous.suit) break;
            if (
              deck.faces.indexOf(current.face) !=
              deck.faces.indexOf(previous.face) + 1
            )
              break;
            current.draggable = true;
            previous = current;
          }
        }
      }
    }
    this.tableau = Tableau;
    this.moveCompleteSuits();
  };

  stockClicked = (ev: any) => {
    console.log(ev);
    let card: Card | undefined;
    let Stock = [...this.stock];
    let Tableau = { ...this.tableau };
    for (let t = 0; t < 10; t++) {
      card = Stock.pop();
      if (card) {
        card.facedown = false;
        card.clickable = false;
        card.draggable = true;
        Tableau[t].push(card);
      } else break;
    }
    this.stock = Stock;
    this.tableau = Tableau;
    this.moves++;
    this.adjustDraggable();
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
    let [from, _1, cardId, _2] = data.split('_');
    cardId = parseInt(cardId);
    let to = '';
    let { target } = event;
    if (target) {
      while (target && !target.classList.contains('card-container')) {
        target = target.parentElement;
      }
      to = target.id;
    }
    if (this.canDrop(from, cardId, to)) this.moveCards(from, cardId, to);
  };

  canDrop = (from: string, cardId: number, to: string) => {
    const { deck } = this;
    const topCard = this.getTopCard(to);
    if (!topCard) return true;
    const { card: draggedCard } = this.getDraggedCard(from, cardId);
    if (!draggedCard) return false;
    if (
      deck.faces.indexOf(topCard.face) ==
      deck.faces.indexOf(draggedCard.face) + 1
    )
      return true;
    return false;
  };

  moveCards = (from: string, cardId: number, to: string) => {
    const [_1, idxF] = from.split('-');
    const [_2, idxT] = to.split('-');
    const toMove: Card[] = [];
    let card: Card | undefined;
    let Tableau = { ...this.tableau };
    if (Tableau[parseInt(idxF)].length) {
      let found = false;
      while (!found && Tableau[parseInt(idxF)].length) {
        card = Tableau[parseInt(idxF)].pop();
        if (card) {
          toMove.push(card);
          if (card.id == cardId) found = true;
        }
      }
    }
    if (toMove.length) {
      while (toMove.length) {
        card = toMove.pop();
        if (card) Tableau[parseInt(idxT)].push(card);
      }
    }
    this.tableau = Tableau;
    this.moves++;
    this.adjustDraggable();
  };

  getTopCard = (to: string) => {
    let card: Card | undefined;
    const [_, idx] = to.split('-');
    if (this.tableau[parseInt(idx)] && this.tableau[parseInt(idx)].length) {
      card =
        this.tableau[parseInt(idx)][this.tableau[parseInt(idx)].length - 1];
    }
    return card;
  };

  getDraggedCard = (from: string, cardId: number) => {
    let card: Card | undefined;
    const [_, idx] = from.split('-');
    let idxC = -1,
      length = 1,
      qty = 0;
    if (this.tableau[parseInt(idx)] && this.tableau[parseInt(idx)].length) {
      length = this.tableau[parseInt(idx)].length;
      idxC = this.tableau[parseInt(idx)].findIndex((c) => c.id == cardId);
      if (idxC != -1) {
        card = this.tableau[parseInt(idx)][idxC];
        qty = length - idxC;
      }
    }
    return { card, qty };
  };

  moveCompleteSuits = () => {
    const { deck } = this;
    let current: Card | undefined, previous: Card | undefined, counter: number;
    let Aces = { ...this.aces };
    let Tableau = { ...this.tableau };
    let toMove: Card[] = [];
    for (let t = 0; t < 10; t++) {
      if (Tableau[t].length >= 13) {
        toMove = [];
        counter = 1;
        previous = Tableau[t][Tableau[t].length - 1];
        if (previous.face == 'ace') {
          for (let i = Tableau[t].length - 2; i >= 0; i--) {
            current = Tableau[t][i];
            if (current.facedown) break;
            if (current.suit != previous.suit) break;
            if (
              deck.faces.indexOf(current.face) !=
              deck.faces.indexOf(previous.face) + 1
            )
              break;
            counter++;
            previous = current;
          }
        }
        if (counter >= 13) {
          while (toMove.length < 13) {
            const card = Tableau[t].pop();
            if (card) {
              card.draggable = false;
              toMove.push(card);
            }
          }
          for (let a = 0; a < 8; a++) {
            if (Aces[a].length == 0) {
              while (toMove.length) {
                const card = toMove.pop();
                if (card) Aces[a].push(card);
              }
              this.moves++;
              break;
            }
          }
        }
      }
    }
    this.tableau = Tableau;
    this.aces = Aces;
  };
}
