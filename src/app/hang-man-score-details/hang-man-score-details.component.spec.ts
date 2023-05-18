import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangManScoreDetailsComponent } from './hang-man-score-details.component';

describe('HangManScoreDetailsComponent', () => {
  let component: HangManScoreDetailsComponent;
  let fixture: ComponentFixture<HangManScoreDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HangManScoreDetailsComponent]
    });
    fixture = TestBed.createComponent(HangManScoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
