import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YachtScoresComponent } from './yacht-scores.component';

describe('YachtScoresComponent', () => {
  let component: YachtScoresComponent;
  let fixture: ComponentFixture<YachtScoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YachtScoresComponent]
    });
    fixture = TestBed.createComponent(YachtScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
