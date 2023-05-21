import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlondikeScoresComponent } from './klondike-scores.component';

describe('KlondikeScoresComponent', () => {
  let component: KlondikeScoresComponent;
  let fixture: ComponentFixture<KlondikeScoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KlondikeScoresComponent]
    });
    fixture = TestBed.createComponent(KlondikeScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
