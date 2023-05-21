import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlondikeComponent } from './klondike.component';

describe('KlondikeComponent', () => {
  let component: KlondikeComponent;
  let fixture: ComponentFixture<KlondikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KlondikeComponent]
    });
    fixture = TestBed.createComponent(KlondikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
