import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YachtRollComponent } from './yacht-roll.component';

describe('YachtRollComponent', () => {
  let component: YachtRollComponent;
  let fixture: ComponentFixture<YachtRollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YachtRollComponent]
    });
    fixture = TestBed.createComponent(YachtRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
