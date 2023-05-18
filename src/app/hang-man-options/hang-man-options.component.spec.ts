import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangManOptionsComponent } from './hang-man-options.component';

describe('HangManOptionsComponent', () => {
  let component: HangManOptionsComponent;
  let fixture: ComponentFixture<HangManOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HangManOptionsComponent]
    });
    fixture = TestBed.createComponent(HangManOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
