import { Component, Input } from '@angular/core';
import { SeaBattleShip } from '../../types/sea-batte-ship.type';
import { SeaBattleShipGridPoint } from '../../types/sea-battle-ship-grid-point.type';

@Component({
  selector: 'app-sea-battle-ship-display',
  templateUrl: './sea-battle-ship-display.component.html',
  styleUrls: ['./sea-battle-ship-display.component.css'],
})
export class SeaBattleShipDisplayComponent {
  private _ship!: SeaBattleShip;
  @Input()
  set ship(value: SeaBattleShip) {
    this._ship = value;
  }
  get ship() {
    return this._ship;
  }

  isPointHit(point: SeaBattleShipGridPoint) {
    let className = 'ship-grid-cell occupied';
    if (this.ship.hits) {
      for (const hit of this.ship.hits) {
        if (
          hit.Horizontal == point.Horizontal &&
          hit.Vertical == point.Vertical
        ) {
          className += ' Hit';
          return className;
        }
      }
    }
    return className;
  }
}
