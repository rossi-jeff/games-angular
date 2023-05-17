import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessWordHintListComponent } from './guess-word-hint-list.component';

describe('GuessWordHintListComponent', () => {
  let component: GuessWordHintListComponent;
  let fixture: ComponentFixture<GuessWordHintListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuessWordHintListComponent]
    });
    fixture = TestBed.createComponent(GuessWordHintListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
