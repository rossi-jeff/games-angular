import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiderScoreRowComponent } from './spider-score-row.component';

describe('SpiderScoreRowComponent', () => {
  let component: SpiderScoreRowComponent;
  let fixture: ComponentFixture<SpiderScoreRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpiderScoreRowComponent]
    });
    fixture = TestBed.createComponent(SpiderScoreRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
