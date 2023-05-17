import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessWordScoreDetailComponent } from './guess-word-score-detail.component';

describe('GuessWordScoreDetailComponent', () => {
  let component: GuessWordScoreDetailComponent;
  let fixture: ComponentFixture<GuessWordScoreDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuessWordScoreDetailComponent]
    });
    fixture = TestBed.createComponent(GuessWordScoreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
