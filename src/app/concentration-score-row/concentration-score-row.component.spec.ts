import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcentrationScoreRowComponent } from './concentration-score-row.component';

describe('ConcentrationScoreRowComponent', () => {
  let component: ConcentrationScoreRowComponent;
  let fixture: ComponentFixture<ConcentrationScoreRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcentrationScoreRowComponent]
    });
    fixture = TestBed.createComponent(ConcentrationScoreRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
