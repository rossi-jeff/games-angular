import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangManWordComponent } from './hang-man-word.component';

describe('HangManWordComponent', () => {
  let component: HangManWordComponent;
  let fixture: ComponentFixture<HangManWordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HangManWordComponent]
    });
    fixture = TestBed.createComponent(HangManWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
