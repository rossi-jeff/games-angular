import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaBattleScoreRowComponent } from './sea-battle-score-row.component';

describe('SeaBattleScoreRowComponent', () => {
  let component: SeaBattleScoreRowComponent;
  let fixture: ComponentFixture<SeaBattleScoreRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeaBattleScoreRowComponent]
    });
    fixture = TestBed.createComponent(SeaBattleScoreRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
