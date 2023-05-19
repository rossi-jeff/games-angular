import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenGrandScoreDetailsComponent } from './ten-grand-score-details.component';

describe('TenGrandScoreDetailsComponent', () => {
  let component: TenGrandScoreDetailsComponent;
  let fixture: ComponentFixture<TenGrandScoreDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenGrandScoreDetailsComponent]
    });
    fixture = TestBed.createComponent(TenGrandScoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
