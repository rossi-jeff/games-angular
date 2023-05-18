import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaBattleOpponentTurnComponent } from './sea-battle-opponent-turn.component';

describe('SeaBattleOpponentTurnComponent', () => {
  let component: SeaBattleOpponentTurnComponent;
  let fixture: ComponentFixture<SeaBattleOpponentTurnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeaBattleOpponentTurnComponent]
    });
    fixture = TestBed.createComponent(SeaBattleOpponentTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
