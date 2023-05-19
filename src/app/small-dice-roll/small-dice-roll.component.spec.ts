import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallDiceRollComponent } from './small-dice-roll.component';

describe('SmallDiceRollComponent', () => {
  let component: SmallDiceRollComponent;
  let fixture: ComponentFixture<SmallDiceRollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallDiceRollComponent]
    });
    fixture = TestBed.createComponent(SmallDiceRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
