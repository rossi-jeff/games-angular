import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessWordGuessListComponent } from './guess-word-guess-list.component';

describe('GuessWordGuessListComponent', () => {
  let component: GuessWordGuessListComponent;
  let fixture: ComponentFixture<GuessWordGuessListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuessWordGuessListComponent]
    });
    fixture = TestBed.createComponent(GuessWordGuessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
