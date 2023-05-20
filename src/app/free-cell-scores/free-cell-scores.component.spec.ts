import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCellScoresComponent } from './free-cell-scores.component';

describe('FreeCellScoresComponent', () => {
  let component: FreeCellScoresComponent;
  let fixture: ComponentFixture<FreeCellScoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreeCellScoresComponent]
    });
    fixture = TestBed.createComponent(FreeCellScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
