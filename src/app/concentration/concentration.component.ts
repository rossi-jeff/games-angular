import { Component } from '@angular/core';
import { Card } from '../../lib/card.class';
import { Deck } from '../../lib/deck.class';
import { Concentration } from '../../types/concentration.type';
import { Clock } from '../../lib/clock.class';
import { GameStatus } from '../../enum/game-status.enum';
import { ApiService } from '../api.service';
import { UserSessionStorage } from '../../lib/user-session.storage';
import { Title } from '@angular/platform-browser';

type MatchType = {
  [key: string]: string | undefined;
};

@Component({
  selector: 'app-concentration',
  templateUrl: './concentration.component.html',
  styleUrls: ['./concentration.component.css'],
})
export class ConcentrationComponent {
  game: Concentration = {};
  deck: Deck = new Deck();
  cards: Card[] = [];
  match: MatchType = {
    card1: undefined,
    card2: undefined,
  };
  moves: number = 0;
  matches: number = 0;
  clock: Clock = new Clock();
  interval: ReturnType<typeof setInterval> | undefined;
  session: UserSessionStorage = new UserSessionStorage();

  constructor(private api: ApiService, private titleService: Title) {
    this.titleService.setTitle('Concentration')
  }

  deal = () => {
    this.deck = new Deck();
    this.deck.preload();
    this.deck.cards.map((c) => (c.clickable = true));
    this.deck.shuffle();
    this.cards = this.deck.cards;
    this.game.Status = GameStatus.Playing;
    this.moves = 0;
    this.matches = 0;
    this.createGame();
  };

  createGame = () => {
    this.api
      .post({
        path: 'api/concentration',
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
    const { moves: Moves, matches: Matched } = this;
    const Elapsed = this.clock.elapsed();
    this.api
      .patch({
        path: `api/concentration/${this.game.id}`,
        body: { Status, Moves, Elapsed, Matched },
      })
      .subscribe((result) => (this.game = result));
  };

  quit = () => {
    this.cards = [];
    this.clock.pause();
    this.updateGame(GameStatus.Lost);
  };

  cardClicked = (ev: any) => {
    const { id } = ev;
    if (this.match['card1'] && this.match['card2']) return;
    if (this.match['card1']) {
      if (id == this.match['card1']) return;
      this.match['card2'] = id;
      this.flipCard(id);
      this.interval = setInterval(() => this.checkMatch(), 2000);
    } else {
      this.match['card1'] = id;
      this.flipCard(id);
    }
  };

  flipCard = (id: string, facedown: boolean = false) => {
    const card = this.getCard(id);
    if (card) card.facedown = facedown;
  };

  getCard = (id: string) => {
    let card: Card | undefined;
    const cardId = parseInt(id.split('_')[2]);
    if (!isNaN(cardId)) {
      card = this.cards.find((c) => c.id == cardId);
    }
    return card;
  };

  checkMatch = () => {
    if (this.interval) clearInterval(this.interval);
    const card1 = this.match['card1']
      ? this.getCard(this.match['card1'])
      : undefined;
    const card2 = this.match['card2']
      ? this.getCard(this.match['card2'])
      : undefined;
    if (card1 && card2 && card1.face == card2.face) {
      this.matches++;
      let idx = this.cards.findIndex((c) => c.id == card1.id);
      let el = document.getElementById(`concentration_0_${card1.id}_${idx}`);
      if (el) el.style.visibility = 'hidden';
      idx = this.cards.findIndex((c) => c.id == card2.id);
      el = document.getElementById(`concentration_0_${card2.id}_${idx}`);
      if (el) el.style.visibility = 'hidden';
    } else {
      if (this.match['card1']) this.flipCard(this.match['card1'], true);
      if (this.match['card2']) this.flipCard(this.match['card2'], true);
    }
    this.match['card1'] = undefined;
    this.match['card2'] = undefined;
    this.moves++;
    if (this.matches >= 26) {
      this.clock.pause();
      this.updateGame(GameStatus.Won);
    }
  };
}
