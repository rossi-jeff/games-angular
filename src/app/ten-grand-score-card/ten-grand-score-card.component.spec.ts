import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenGrandScoreCardComponent } from './ten-grand-score-card.component';

describe('TenGrandScoreCardComponent', () => {
  let component: TenGrandScoreCardComponent;
  let fixture: ComponentFixture<TenGrandScoreCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenGrandScoreCardComponent]
    });
    fixture = TestBed.createComponent(TenGrandScoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
