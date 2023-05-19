import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YachtScoreRowComponent } from './yacht-score-row.component';

describe('YachtScoreRowComponent', () => {
  let component: YachtScoreRowComponent;
  let fixture: ComponentFixture<YachtScoreRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YachtScoreRowComponent]
    });
    fixture = TestBed.createComponent(YachtScoreRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
