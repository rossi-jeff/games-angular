import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangManScoresComponent } from './hang-man-scores.component';

describe('HangManScoresComponent', () => {
  let component: HangManScoresComponent;
  let fixture: ComponentFixture<HangManScoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HangManScoresComponent]
    });
    fixture = TestBed.createComponent(HangManScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
