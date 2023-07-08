import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerSquaresComponent } from './poker-squares.component';

describe('PokerSquaresComponent', () => {
  let component: PokerSquaresComponent;
  let fixture: ComponentFixture<PokerSquaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokerSquaresComponent]
    });
    fixture = TestBed.createComponent(PokerSquaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
