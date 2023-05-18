import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangManScoreRowComponent } from './hang-man-score-row.component';

describe('HangManScoreRowComponent', () => {
  let component: HangManScoreRowComponent;
  let fixture: ComponentFixture<HangManScoreRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HangManScoreRowComponent]
    });
    fixture = TestBed.createComponent(HangManScoreRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
