import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBreakerScoresComponent } from './code-breaker-scores.component';

describe('CodeBreakerScoresComponent', () => {
  let component: CodeBreakerScoresComponent;
  let fixture: ComponentFixture<CodeBreakerScoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeBreakerScoresComponent]
    });
    fixture = TestBed.createComponent(CodeBreakerScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
