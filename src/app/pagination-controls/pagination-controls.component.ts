import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-controls',
  templateUrl: './pagination-controls.component.html',
  styleUrls: ['./pagination-controls.component.css'],
})
export class PaginationControlsComponent {
  private _limit!: number;
  private _offset!: number;
  private _count!: number;
  @Input()
  set limit(value: number) {
    this._limit = value;
    this.setCurrent();
    this.setPages();
  }
  get limit() {
    return this._limit;
  }
  @Input()
  set offset(value: number) {
    this._offset = value;
    this.setCurrent();
  }
  get offset() {
    return this._offset;
  }
  @Input()
  set count(value: number) {
    this._count = value;
    this.setPages();
  }
  get count() {
    return this._count;
  }
  pages: number[] = [];
  current: number = 1;
  perPage: number[] = [5, 10, 25];
  @Output() pageChanged = new EventEmitter<number>();
  @Output() limitChanged = new EventEmitter<number>();

  setCurrent = () => {
    if (typeof this.offset == 'number' && typeof this.limit == 'number') {
      this.current = Math.floor(this.offset / this.limit) + 1;
    }
  };

  setPages = () => {
    if (typeof this.count == 'number' && typeof this.limit == 'number') {
      let page = 1;
      let counter = 0;
      this.pages = [];
      if (this.count > 0) {
        while (counter < this.count) {
          this.pages.push(page);
          page++;
          counter += this.limit;
        }
      } else {
        this.pages.push(page);
      }
    }
  };

  pageClicked = (page: number) => {
    this.current = page;
    this.pageChanged.emit(page);
  };

  limitSelectChanged = (ev: any) => {
    this.limitChanged.emit(this.perPage[ev.target.selectedIndex]);
  };

  buttonClass = (page: number) => {
    return page == this.current ? 'current' : '';
  };
}
