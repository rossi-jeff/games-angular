import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YachtComponent } from './yacht.component';

describe('YachtComponent', () => {
  let component: YachtComponent;
  let fixture: ComponentFixture<YachtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YachtComponent]
    });
    fixture = TestBed.createComponent(YachtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
