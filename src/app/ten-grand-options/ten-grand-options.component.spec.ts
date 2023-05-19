import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenGrandOptionsComponent } from './ten-grand-options.component';

describe('TenGrandOptionsComponent', () => {
  let component: TenGrandOptionsComponent;
  let fixture: ComponentFixture<TenGrandOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenGrandOptionsComponent]
    });
    fixture = TestBed.createComponent(TenGrandOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
