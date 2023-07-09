import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerSquaresScoreRowComponent } from './poker-squares-score-row.component';

describe('PokerSquaresScoreRowComponent', () => {
  let component: PokerSquaresScoreRowComponent;
  let fixture: ComponentFixture<PokerSquaresScoreRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokerSquaresScoreRowComponent]
    });
    fixture = TestBed.createComponent(PokerSquaresScoreRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
