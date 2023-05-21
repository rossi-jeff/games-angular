import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlondikeScoreRowComponent } from './klondike-score-row.component';

describe('KlondikeScoreRowComponent', () => {
  let component: KlondikeScoreRowComponent;
  let fixture: ComponentFixture<KlondikeScoreRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KlondikeScoreRowComponent]
    });
    fixture = TestBed.createComponent(KlondikeScoreRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
