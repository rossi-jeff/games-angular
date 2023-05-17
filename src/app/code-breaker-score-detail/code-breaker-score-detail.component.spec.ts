import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBreakerScoreDetailComponent } from './code-breaker-score-detail.component';

describe('CodeBreakerScoreDetailComponent', () => {
  let component: CodeBreakerScoreDetailComponent;
  let fixture: ComponentFixture<CodeBreakerScoreDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeBreakerScoreDetailComponent]
    });
    fixture = TestBed.createComponent(CodeBreakerScoreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
