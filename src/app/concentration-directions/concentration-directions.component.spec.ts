import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcentrationDirectionsComponent } from './concentration-directions.component';

describe('ConcentrationDirectionsComponent', () => {
  let component: ConcentrationDirectionsComponent;
  let fixture: ComponentFixture<ConcentrationDirectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcentrationDirectionsComponent]
    });
    fixture = TestBed.createComponent(ConcentrationDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
