import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBreakerSolutionComponent } from './code-breaker-solution.component';

describe('CodeBreakerSolutionComponent', () => {
  let component: CodeBreakerSolutionComponent;
  let fixture: ComponentFixture<CodeBreakerSolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeBreakerSolutionComponent]
    });
    fixture = TestBed.createComponent(CodeBreakerSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
