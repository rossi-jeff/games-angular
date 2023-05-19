import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenGrandScoreRowComponent } from './ten-grand-score-row.component';

describe('TenGrandScoreRowComponent', () => {
  let component: TenGrandScoreRowComponent;
  let fixture: ComponentFixture<TenGrandScoreRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenGrandScoreRowComponent]
    });
    fixture = TestBed.createComponent(TenGrandScoreRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
