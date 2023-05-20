import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../lib/card.class';

@Component({
  selector: 'app-playing-card',
  templateUrl: './playing-card.component.html',
  styleUrls: ['./playing-card.component.css'],
})
export class PlayingCardComponent {
  private _card!: Card;
  @Input()
  set card(value: Card) {
    this._card = value;
    const { from, level, index, card } = this;
    this.id = `${from}_${level}_${card.id}_${index}`;
    this.src = card.facedown ? card.backSrc : card.src;
    this.alt = card.facedown ? 'Card Back' : card.toString();
    const top = parseInt(this.level) * 1.5 + 0.5;
    setTimeout(() => {
      const el = document.getElementById(this.id);
      if (el) el.style.top = `${top}rem`;
    }, 100);
  }
  get card() {
    return this._card;
  }
  @Input() from!: string;
  @Input() index!: string;
  @Input() level!: string;
  id: string = '';
  src: string = '';
  alt: string = '';
  @Output() clicked = new EventEmitter<{ id: string }>();
  @Output() dragged = new EventEmitter<any>();

  cardClicked = () => {
    if (!this.card.clickable) return;
    const { id } = this;
    this.clicked.emit({ id });
  };

  cardDragged = (ev: any) => {
    if (!this.card.draggable) return;
    this.dragged.emit(ev);
  };
}
