import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessWordOptionsComponent } from './guess-word-options.component';

describe('GuessWordOptionsComponent', () => {
  let component: GuessWordOptionsComponent;
  let fixture: ComponentFixture<GuessWordOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuessWordOptionsComponent]
    });
    fixture = TestBed.createComponent(GuessWordOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
