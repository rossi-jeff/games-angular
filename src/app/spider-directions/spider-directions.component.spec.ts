import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiderDirectionsComponent } from './spider-directions.component';

describe('SpiderDirectionsComponent', () => {
  let component: SpiderDirectionsComponent;
  let fixture: ComponentFixture<SpiderDirectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpiderDirectionsComponent]
    });
    fixture = TestBed.createComponent(SpiderDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
