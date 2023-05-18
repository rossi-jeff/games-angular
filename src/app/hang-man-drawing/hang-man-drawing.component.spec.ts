import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangManDrawingComponent } from './hang-man-drawing.component';

describe('HangManDrawingComponent', () => {
  let component: HangManDrawingComponent;
  let fixture: ComponentFixture<HangManDrawingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HangManDrawingComponent]
    });
    fixture = TestBed.createComponent(HangManDrawingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
