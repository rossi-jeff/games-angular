import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerSquaresScoresComponent } from './poker-squares-scores.component';

describe('PokerSquaresScoresComponent', () => {
  let component: PokerSquaresScoresComponent;
  let fixture: ComponentFixture<PokerSquaresScoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokerSquaresScoresComponent]
    });
    fixture = TestBed.createComponent(PokerSquaresScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
