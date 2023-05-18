import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaBattleScoreDetailsComponent } from './sea-battle-score-details.component';

describe('SeaBattleScoreDetailsComponent', () => {
  let component: SeaBattleScoreDetailsComponent;
  let fixture: ComponentFixture<SeaBattleScoreDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeaBattleScoreDetailsComponent]
    });
    fixture = TestBed.createComponent(SeaBattleScoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
