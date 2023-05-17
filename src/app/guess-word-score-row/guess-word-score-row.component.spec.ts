import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessWordScoreRowComponent } from './guess-word-score-row.component';

describe('GuessWordScoreRowComponent', () => {
  let component: GuessWordScoreRowComponent;
  let fixture: ComponentFixture<GuessWordScoreRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuessWordScoreRowComponent]
    });
    fixture = TestBed.createComponent(GuessWordScoreRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
