import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenGrandComponent } from './ten-grand.component';

describe('TenGrandComponent', () => {
  let component: TenGrandComponent;
  let fixture: ComponentFixture<TenGrandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenGrandComponent]
    });
    fixture = TestBed.createComponent(TenGrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
