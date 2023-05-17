import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBreakerGuessFormComponent } from './code-breaker-guess-form.component';

describe('CodeBreakerGuessFormComponent', () => {
  let component: CodeBreakerGuessFormComponent;
  let fixture: ComponentFixture<CodeBreakerGuessFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeBreakerGuessFormComponent]
    });
    fixture = TestBed.createComponent(CodeBreakerGuessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
