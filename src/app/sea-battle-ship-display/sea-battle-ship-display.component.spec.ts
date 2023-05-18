import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaBattleShipDisplayComponent } from './sea-battle-ship-display.component';

describe('SeaBattleShipDisplayComponent', () => {
  let component: SeaBattleShipDisplayComponent;
  let fixture: ComponentFixture<SeaBattleShipDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeaBattleShipDisplayComponent]
    });
    fixture = TestBed.createComponent(SeaBattleShipDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
