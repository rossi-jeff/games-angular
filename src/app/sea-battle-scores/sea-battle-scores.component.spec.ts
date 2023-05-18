import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaBattleScoresComponent } from './sea-battle-scores.component';

describe('SeaBattleScoresComponent', () => {
  let component: SeaBattleScoresComponent;
  let fixture: ComponentFixture<SeaBattleScoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeaBattleScoresComponent]
    });
    fixture = TestBed.createComponent(SeaBattleScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
