import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaBattleDirectionsComponent } from './sea-battle-directions.component';

describe('SeaBattleDirectionsComponent', () => {
  let component: SeaBattleDirectionsComponent;
  let fixture: ComponentFixture<SeaBattleDirectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeaBattleDirectionsComponent]
    });
    fixture = TestBed.createComponent(SeaBattleDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
