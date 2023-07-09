import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Card } from '../../lib/card.class';
import { Deck } from '../../lib/deck.class';
import { ApiService } from '../api.service';
import { PokerSquare } from '../../types/poker-square.type';
import { UserSessionStorage } from '../../lib/user-session.storage';
import { GameStatus } from '../../enum/game-status.enum';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-poker-squares',
  templateUrl: './poker-squares.component.html',
  styleUrls: ['./poker-squares.component.css'],
})
export class PokerSquaresComponent {
  constructor(private api: ApiService, private titleService: Title) {
    this.titleService.setTitle('Poker Squares');
  }

  session: UserSessionStorage = new UserSessionStorage();
  game: PokerSquare = {};
  placementForm = new FormGroup({
    Row: new FormControl('A'),
    Column: new FormControl(0),
  });
  deck: Deck = new Deck();
  rows = ['A', 'B', 'C', 'D', 'E'];
  columns = [0, 1, 2, 3, 4];
  grid: { [key: string]: { [key: number]: Card } } = {
    A: {},
    B: {},
    C: {},
    D: {},
    E: {},
  };
  scores: { row: { [key: string]: number }; column: number[]; total: number } =
    {
      row: {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0,
      },
      column: [0, 0, 0, 0, 0],
      total: 0,
    };
  stock: Card[] = [];
  current: Card | undefined;

  clearGrid = () => {
    for (const row of this.rows) {
      this.grid[row] = {};
    }
  };

  deal = () => {
    this.deck = new Deck();
    this.deck.preload();
    this.deck.shuffle();
    this.stock = [];
    this.current = undefined;
    this.clearGrid();
    while (this.stock.length < 25) {
      const card = this.deck.draw();
      if (card) {
        card.clickable = true;
        card.facedown = true;
        this.stock.push(card);
      }
    }
    this.createGame();
  };

  createGame = () => {
    this.api
      .post({
        path: 'api/poker_square',
        body: {},
        token: this.session.data.Token || '',
      })
      .subscribe((result) => {
        this.game = result;
      });
  };

  updateGame = (Score: number, Status: GameStatus = GameStatus.Won) => {
    if (!this.game.id) return;
    this.api
      .patch({
        path: `api/poker_square/${this.game.id}`,
        body: { Score, Status },
      })
      .subscribe((result) => {
        this.game = result;
      });
  };

  updateScores = () => {
    let hand: Card[] = [];
    let total = 0;
    let card: Card | undefined;
    // row scores
    for (const row of this.rows) {
      hand = [];
      for (const column of this.columns) {
        card = this.grid[row][column];
        if (card) hand.push(card);
      }
      this.scores.row[row] = hand.length == 5 ? this.scoreHand(hand) : 0;
      total += this.scores.row[row];
    }
    // column scores
    for (const column of this.columns) {
      hand = [];
      for (const row of this.rows) {
        card = this.grid[row][column];
        if (card) hand.push(card);
      }
      this.scores.column[column] = hand.length == 5 ? this.scoreHand(hand) : 0;
      total += this.scores.column[column];
    }
    this.scores.total = total;
    if (this.stock.length == 0) {
      this.updateGame(total);
    }
  };

  scoreHand = (hand: Card[]) => {
    const results = this.checkHand(hand);
    if (results['isRoyal']) return 100;
    if (results['isStraightFlush']) return 75;
    if (results['isFourKind']) return 50;
    if (results['isFullHouse']) return 25;
    if (results['isFlush']) return 20;
    if (results['isStraight']) return 15;
    if (results['isThreeKind']) return 10;
    if (results['isTwoPair']) return 5;
    if (results['isPair']) return 2;
    return 0;
  };

  checkHand = (hand: Card[]) => {
    let data: {
      faces: string[];
      suits: { [key: string]: number };
      counts: { [key: string]: number };
      order: number[];
    } = {
      faces: [],
      suits: {},
      counts: {},
      order: [],
    };
    for (const card of hand) {
      data.faces.push(card.face);
      if (!data.suits[card.suit]) data.suits[card.suit] = 0;
      if (!data.counts[card.face]) data.counts[card.face] = 0;
      data.suits[card.suit]++;
      data.counts[card.face]++;
      data.order.push(this.deck.faces.indexOf(card.face));
    }
    let results: { [key: string]: boolean } = {};
    results['isFlush'] = Object.values(data.suits).includes(5);
    results['isThreeKind'] = Object.values(data.counts).includes(3);
    results['isFourKind'] = Object.values(data.counts).includes(4);
    results['isPair'] = Object.values(data.counts).includes(2);
    results['isFullHouse'] = results['isThreeKind'] && results['isPair'];
    results['isTwoPair'] = this.isTwoPair(Object.values(data.counts));
    results['isStraight'] = this.isStraight(data.order);
    results['isStraightFlush'] = results['isFlush'] && results['isStraight'];
    results['isRoyal'] =
      results['isStraightFlush'] && data.faces.includes('king');
    return results;
  };

  isStraight = (order: number[]) => {
    const sorted = order.sort((a, b) => a - b);
    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i - 1] + 1 != sorted[i]) return false;
    }
    return true;
  };

  isTwoPair = (values: number[]) => {
    const idx = values.indexOf(2);
    if (idx == -1) return false;
    return idx != values.lastIndexOf(2);
  };

  stockClicked = (event: any) => {
    const { id } = event;
    if (this.current) return;
    const cardId = parseInt(id.split('_')[2]);
    const card = this.stock.pop();
    if (card) {
      if (card.id == cardId) {
        card.clickable = false;
        card.draggable = true;
        card.facedown = false;
        this.current = card;
      } else this.stock.push(card);
    }
  };

  highLightGridPoint = () => {
    const { Row, Column } = this.placementForm.value;
    const point = document.getElementById(`${Row}_${Column}`);
    if (point) {
      point.classList.add('over');
      setTimeout(() => {
        point.classList.remove('over');
      }, 500);
    }
  };

  placeCard = () => {
    if (!this.current) return;
    const { Row, Column } = this.placementForm.value;
    if (!Row || Column == null) return;
    if (this.grid[Row][Column]) return;
    const card = this.current;
    if (card) {
      card.draggable = false;
      this.grid[Row][Column] = card;
      this.current = undefined;
      this.updateScores();
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
    if (from != 'waste') return;
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
    let [row, column] = to.split('_');
    if (this.grid[row][parseInt(column)]) return;
    const card = this.current;
    if (card) {
      card.draggable = false;
      this.grid[row][parseInt(column)] = card;
      this.current = undefined;
      this.updateScores();
    }
  };
}
