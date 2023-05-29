import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangManDirectionsComponent } from './hang-man-directions.component';

describe('HangManDirectionsComponent', () => {
  let component: HangManDirectionsComponent;
  let fixture: ComponentFixture<HangManDirectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HangManDirectionsComponent]
    });
    fixture = TestBed.createComponent(HangManDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
