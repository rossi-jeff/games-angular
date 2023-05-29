import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YachtDirectionsComponent } from './yacht-directions.component';

describe('YachtDirectionsComponent', () => {
  let component: YachtDirectionsComponent;
  let fixture: ComponentFixture<YachtDirectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YachtDirectionsComponent]
    });
    fixture = TestBed.createComponent(YachtDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
