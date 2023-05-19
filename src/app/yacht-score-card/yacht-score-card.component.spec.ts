import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YachtScoreCardComponent } from './yacht-score-card.component';

describe('YachtScoreCardComponent', () => {
  let component: YachtScoreCardComponent;
  let fixture: ComponentFixture<YachtScoreCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YachtScoreCardComponent]
    });
    fixture = TestBed.createComponent(YachtScoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
