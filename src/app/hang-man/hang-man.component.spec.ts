import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangManComponent } from './hang-man.component';

describe('HangManComponent', () => {
  let component: HangManComponent;
  let fixture: ComponentFixture<HangManComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HangManComponent]
    });
    fixture = TestBed.createComponent(HangManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
