import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBreakerOptionsComponent } from './code-breaker-options.component';

describe('CodeBreakerOptionsComponent', () => {
  let component: CodeBreakerOptionsComponent;
  let fixture: ComponentFixture<CodeBreakerOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeBreakerOptionsComponent]
    });
    fixture = TestBed.createComponent(CodeBreakerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
