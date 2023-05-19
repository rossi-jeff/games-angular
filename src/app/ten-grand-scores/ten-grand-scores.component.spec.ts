import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenGrandScoresComponent } from './ten-grand-scores.component';

describe('TenGrandScoresComponent', () => {
  let component: TenGrandScoresComponent;
  let fixture: ComponentFixture<TenGrandScoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenGrandScoresComponent]
    });
    fixture = TestBed.createComponent(TenGrandScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
