import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcentrationScoresComponent } from './concentration-scores.component';

describe('ConcentrationScoresComponent', () => {
  let component: ConcentrationScoresComponent;
  let fixture: ComponentFixture<ConcentrationScoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcentrationScoresComponent]
    });
    fixture = TestBed.createComponent(ConcentrationScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
