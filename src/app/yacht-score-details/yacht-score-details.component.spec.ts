import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YachtScoreDetailsComponent } from './yacht-score-details.component';

describe('YachtScoreDetailsComponent', () => {
  let component: YachtScoreDetailsComponent;
  let fixture: ComponentFixture<YachtScoreDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YachtScoreDetailsComponent]
    });
    fixture = TestBed.createComponent(YachtScoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
