import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangManButtonsComponent } from './hang-man-buttons.component';

describe('HangManButtonsComponent', () => {
  let component: HangManButtonsComponent;
  let fixture: ComponentFixture<HangManButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HangManButtonsComponent]
    });
    fixture = TestBed.createComponent(HangManButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
