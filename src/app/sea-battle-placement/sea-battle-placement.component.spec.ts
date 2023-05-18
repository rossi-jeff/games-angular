import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaBattlePlacementComponent } from './sea-battle-placement.component';

describe('SeaBattlePlacementComponent', () => {
  let component: SeaBattlePlacementComponent;
  let fixture: ComponentFixture<SeaBattlePlacementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeaBattlePlacementComponent]
    });
    fixture = TestBed.createComponent(SeaBattlePlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
