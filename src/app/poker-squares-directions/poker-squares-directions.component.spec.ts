import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerSquaresDirectionsComponent } from './poker-squares-directions.component';

describe('PokerSquaresDirectionsComponent', () => {
  let component: PokerSquaresDirectionsComponent;
  let fixture: ComponentFixture<PokerSquaresDirectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokerSquaresDirectionsComponent]
    });
    fixture = TestBed.createComponent(PokerSquaresDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
