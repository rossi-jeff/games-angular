import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessWordDirectionsComponent } from './guess-word-directions.component';

describe('GuessWordDirectionsComponent', () => {
  let component: GuessWordDirectionsComponent;
  let fixture: ComponentFixture<GuessWordDirectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuessWordDirectionsComponent]
    });
    fixture = TestBed.createComponent(GuessWordDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
