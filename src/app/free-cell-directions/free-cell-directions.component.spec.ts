import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCellDirectionsComponent } from './free-cell-directions.component';

describe('FreeCellDirectionsComponent', () => {
  let component: FreeCellDirectionsComponent;
  let fixture: ComponentFixture<FreeCellDirectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreeCellDirectionsComponent]
    });
    fixture = TestBed.createComponent(FreeCellDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
