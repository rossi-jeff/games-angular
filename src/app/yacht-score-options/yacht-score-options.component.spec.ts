import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YachtScoreOptionsComponent } from './yacht-score-options.component';

describe('YachtScoreOptionsComponent', () => {
  let component: YachtScoreOptionsComponent;
  let fixture: ComponentFixture<YachtScoreOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YachtScoreOptionsComponent]
    });
    fixture = TestBed.createComponent(YachtScoreOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
