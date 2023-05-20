import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCellScoreRowComponent } from './free-cell-score-row.component';

describe('FreeCellScoreRowComponent', () => {
  let component: FreeCellScoreRowComponent;
  let fixture: ComponentFixture<FreeCellScoreRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreeCellScoreRowComponent]
    });
    fixture = TestBed.createComponent(FreeCellScoreRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
