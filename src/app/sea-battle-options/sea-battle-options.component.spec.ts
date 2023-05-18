import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaBattleOptionsComponent } from './sea-battle-options.component';

describe('SeaBattleOptionsComponent', () => {
  let component: SeaBattleOptionsComponent;
  let fixture: ComponentFixture<SeaBattleOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeaBattleOptionsComponent]
    });
    fixture = TestBed.createComponent(SeaBattleOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
