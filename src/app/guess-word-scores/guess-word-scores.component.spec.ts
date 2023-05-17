import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessWordScoresComponent } from './guess-word-scores.component';

describe('GuessWordScoresComponent', () => {
  let component: GuessWordScoresComponent;
  let fixture: ComponentFixture<GuessWordScoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuessWordScoresComponent]
    });
    fixture = TestBed.createComponent(GuessWordScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
