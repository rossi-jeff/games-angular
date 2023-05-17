import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessWordGuessFormComponent } from './guess-word-guess-form.component';

describe('GuessWordGuessFormComponent', () => {
  let component: GuessWordGuessFormComponent;
  let fixture: ComponentFixture<GuessWordGuessFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuessWordGuessFormComponent]
    });
    fixture = TestBed.createComponent(GuessWordGuessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
