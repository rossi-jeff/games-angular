import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangManDisplayComponent } from './hang-man-display.component';

describe('HangManDisplayComponent', () => {
  let component: HangManDisplayComponent;
  let fixture: ComponentFixture<HangManDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HangManDisplayComponent]
    });
    fixture = TestBed.createComponent(HangManDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
