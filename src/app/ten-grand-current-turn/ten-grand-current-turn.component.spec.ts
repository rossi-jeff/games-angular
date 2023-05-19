import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenGrandCurrentTurnComponent } from './ten-grand-current-turn.component';

describe('TenGrandCurrentTurnComponent', () => {
  let component: TenGrandCurrentTurnComponent;
  let fixture: ComponentFixture<TenGrandCurrentTurnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenGrandCurrentTurnComponent]
    });
    fixture = TestBed.createComponent(TenGrandCurrentTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
