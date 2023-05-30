import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenGrandDirectionsComponent } from './ten-grand-directions.component';

describe('TenGrandDirectionsComponent', () => {
  let component: TenGrandDirectionsComponent;
  let fixture: ComponentFixture<TenGrandDirectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenGrandDirectionsComponent]
    });
    fixture = TestBed.createComponent(TenGrandDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
