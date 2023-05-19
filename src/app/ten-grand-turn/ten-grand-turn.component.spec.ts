import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenGrandTurnComponent } from './ten-grand-turn.component';

describe('TenGrandTurnComponent', () => {
  let component: TenGrandTurnComponent;
  let fixture: ComponentFixture<TenGrandTurnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenGrandTurnComponent]
    });
    fixture = TestBed.createComponent(TenGrandTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
