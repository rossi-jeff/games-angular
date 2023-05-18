import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaBattlePlayerTurnComponent } from './sea-battle-player-turn.component';

describe('SeaBattlePlayerTurnComponent', () => {
  let component: SeaBattlePlayerTurnComponent;
  let fixture: ComponentFixture<SeaBattlePlayerTurnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeaBattlePlayerTurnComponent]
    });
    fixture = TestBed.createComponent(SeaBattlePlayerTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
