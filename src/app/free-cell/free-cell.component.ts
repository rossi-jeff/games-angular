import { Component } from '@angular/core';
import { Deck } from '../../lib/deck.class';
import { Card, CardContainer } from '../../lib/card.class';
import { GameStatus } from '../../enum/game-status.enum';
import { Clock } from '../../lib/clock.class';
import { ApiService } from '../api.service';
import { FreeCell } from '../../types/free-cell.type';
import { UserSessionStorage } from '../../lib/user-session.storage';

@Component({
  selector: 'app-free-cell',
  templateUrl: './free-cell.component.html',
  styleUrls: ['./free-cell.component.css'],
})
export class FreeCellComponent {
  game: FreeCell = {};
  deck: Deck = new Deck();
  free: CardContainer = {};
  aces: CardContainer = {};
  tableau: CardContainer = {};
  card: Card | undefined;
  canAutoComplete: boolean = false;
  moves: number = 0;
  clock: Clock = new Clock();
  session: UserSessionStorage = new UserSessionStorage();

  constructor(private api: ApiService) {}

  deal = () => {
    this.deck = new Deck();
    this.deck.preload();
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
    this.moves = 0;
    this.adjustDraggable();
    this.createGame();
  };

  createGame = () => {
    this.api
      .post({
        path: 'api/free_cell',
        body: {},
        token: this.session.data.Token || '',
      })
      .subscribe((result) => {
        this.game = result;
        this.clock.run();
      });
  };

  updateGame = (Status: GameStatus) => {
    if (!this.game.id) return;
    const { moves: Moves } = this;
    const Elapsed = this.clock.elapsed();
    this.api
      .patch({
        path: `api/free_cell/${this.game.id}`,
        body: { Status, Moves, Elapsed },
      })
      .subscribe((result) => (this.game = result));
  };

  quit = () => {
    this.clock.pause();
    for (let i = 0; i < 4; i++) {
      this.aces[i] = [];
      this.free[i] = [];
    }
    for (let i = 0; i < 8; i++) {
      this.tableau[i] = [];
    }
    this.updateGame(GameStatus.Lost);
  };

  countAces = () => {
    let count = 0;
    for (let i = 0; i < 4; i++) count += this.aces[i].length;
    return count;
  };

  checkStatus = () => {
    const aceCount = this.countAces();
    let allDescending = true;
    let current: Card | undefined;
    let previous: Card | undefined;
    const { deck } = this;
    for (let i = 0; i < 8; i++) {
      current = undefined;
      previous = undefined;
      for (let j = this.tableau[i].length - 1; j >= 0; j--) {
        current = this.tableau[i][j];
        if (previous) {
          if (
            !(
              deck.faces.indexOf(current.face) ==
                deck.faces.indexOf(previous.face) + 1 &&
              deck.color(previous) != deck.color(current)
            )
          )
            allDescending = false;
        }
        previous = current;
      }
      if (!allDescending) break;
    }
    this.canAutoComplete = allDescending;
    if (aceCount == 52) {
      this.clock.pause();
      this.updateGame(GameStatus.Won);
    }
  };

  autoComplete = () => {
    let from: string = '';
    let to: string = '';
    let lowestCard: Card | undefined;
    let topCard: Card | undefined;
    const { deck } = this;
    for (let i = 0; i < 4; i++) {
      if (this.free[i].length) {
        topCard = this.free[i][this.free[i].length - 1];
        if (
          !lowestCard ||
          deck.faces.indexOf(topCard.face) < deck.faces.indexOf(lowestCard.face)
        ) {
          lowestCard = topCard;
          from = `free-${i}`;
        }
      }
    }
    for (let i = 0; i < 8; i++) {
      if (this.tableau[i].length) {
        topCard = this.tableau[i][this.tableau[i].length - 1];
        if (
          !lowestCard ||
          deck.faces.indexOf(topCard.face) < deck.faces.indexOf(lowestCard.face)
        ) {
          lowestCard = topCard;
          from = `tableau-${i}`;
        }
      }
    }
    topCard = undefined;
    if (lowestCard && from) {
      for (let i = 0; i < 4; i++) {
        if (this.aces[i].length) {
          topCard = this.aces[i][this.aces[i].length - 1];
          if (
            topCard &&
            topCard.suit == lowestCard.suit &&
            deck.faces.indexOf(lowestCard.face) ==
              deck.faces.indexOf(topCard.face) + 1
          ) {
            to = `aces-${i}`;
            break;
          }
        } else {
          if (lowestCard.face == 'ace') {
            to = `aces-${i}`;
            break;
          }
        }
      }
      if (to) this.autoMoveCard(from, to);
    }
  };

  autoMoveCard = (from: string, to: string) => {
    const [fromType, fromIdx] = from.split('-');
    const [_, toIdx] = to.split('-');
    let card: Card | undefined;
    switch (fromType) {
      case 'free':
        card = this.free[parseInt(fromIdx)].pop();
        break;
      case 'aces':
        card = this.aces[parseInt(fromIdx)].pop();
        break;
      case 'tableau':
        card = this.tableau[parseInt(fromIdx)].pop();
        break;
    }
    if (!card) return;
    this.aces[parseInt(toIdx)].push(card);
    this.checkStatus();
    this.moves++;
    setTimeout(() => {
      this.autoComplete();
    }, 250);
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
          deck.faces.indexOf(current.face) ==
            deck.faces.indexOf(previous.face) + 1 &&
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
    if (this.canDrop(from, to, cardId)) this.moveCards(from, to, cardId);
  };

  moveCards = (from: string, to: string, cardId: number) => {
    const toMove: Card[] = [];
    const [fromType, fromIdx] = from.split('-');
    const [toType, toIdx] = to.split('-');
    let card: Card | undefined;
    let complete = false;
    switch (fromType) {
      case 'free':
        while (!complete) {
          card = this.free[parseInt(fromIdx)].pop();
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
        while (!complete) {
          card = this.tableau[parseInt(fromIdx)].pop();
          if (card) {
            toMove.push(card);
            if (card.id == cardId) complete = true;
          } else complete = true;
        }
        break;
    }
    switch (toType) {
      case 'free':
        while (toMove.length) {
          card = toMove.pop();
          if (card) {
            this.free[parseInt(toIdx)].push(card);
          }
        }
        break;
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
    this.adjustDraggable();
    this.moves++;
    this.checkStatus();
  };

  canDrop = (from: string, to: string, cardId: number) => {
    const qty = this.getDraggedQuantity(from, cardId);
    if (qty == 0) return false;
    const topCard = this.getTopCard(to);
    const draggedCard = this.getDraggedCard(from, cardId);
    if (draggedCard == undefined) return false;
    const max = this.maxFreeSpace();
    const [type, _] = to.split('-');
    const { deck } = this;
    switch (type) {
      case 'free':
        if (qty > 1) return false;
        if (topCard == undefined) return true;
        return false;
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
        if (qty > max) return false;
        if (topCard == undefined) return true;
        if (
          deck.color(topCard) != deck.color(draggedCard) &&
          deck.faces.indexOf(topCard.face) ==
            deck.faces.indexOf(draggedCard.face) + 1
        )
          return true;
        return false;
    }
    return false;
  };

  maxFreeSpace = () => {
    let emptyFree = 0;
    let emptyTableau = 0;
    for (let i = 0; i < 4; i++) {
      if (!this.free[i].length) emptyFree++;
    }
    for (let i = 0; i < 8; i++) {
      if (!this.tableau[i].length) emptyTableau++;
    }
    return emptyTableau * emptyFree + emptyFree + 1;
  };

  getDraggedQuantity = (from: string, cardId: number) => {
    let [type, index] = from.split('-');
    const num = parseInt(index);
    let idx: number = -1;
    let length: number = 0;
    switch (type) {
      case 'free':
        idx = this.free[num].findIndex((c) => c.id == cardId);
        length = this.free[num].length;
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
      case 'free':
        if (this.free[num].length) {
          card = this.free[num][this.free[num].length - 1];
        }
        break;
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
      case 'free':
        card = this.free[num].find((c) => c.id == cardId);
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
