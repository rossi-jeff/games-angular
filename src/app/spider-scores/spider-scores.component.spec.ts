import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiderScoresComponent } from './spider-scores.component';

describe('SpiderScoresComponent', () => {
  let component: SpiderScoresComponent;
  let fixture: ComponentFixture<SpiderScoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpiderScoresComponent]
    });
    fixture = TestBed.createComponent(SpiderScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
