import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlondikeDirectionsComponent } from './klondike-directions.component';

describe('KlondikeDirectionsComponent', () => {
  let component: KlondikeDirectionsComponent;
  let fixture: ComponentFixture<KlondikeDirectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KlondikeDirectionsComponent]
    });
    fixture = TestBed.createComponent(KlondikeDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
