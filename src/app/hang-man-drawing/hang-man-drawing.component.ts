import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hang-man-drawing',
  templateUrl: './hang-man-drawing.component.html',
  styleUrls: ['./hang-man-drawing.component.css'],
})
export class HangManDrawingComponent {
  private _wrong!: string;
  @Input()
  set wrong(value: string) {
    this._wrong = value;
    this.updateDrawing();
  }
  get wrong() {
    return this._wrong;
  }
  
  parts: string[] = [
    'head',
    'body',
    'left-arm',
    'right-arm',
    'left-leg',
    'right-leg',
  ];

  clearDrawing = () => {
    for (const part of this.parts) {
      const el = document.getElementById(part);
      if (el) el.classList.remove('visible');
    }
  };

  updateDrawing = () => {
    this.clearDrawing();
    const wrongArr = this.wrong.split(',').filter((l) => l.length == 1);
    const min = Math.min(wrongArr.length, this.parts.length);
    for (let i = 0; i < min; i++) {
      const el = document.getElementById(this.parts[i]);
      if (el) el.classList.add('visible');
    }
  };
}
