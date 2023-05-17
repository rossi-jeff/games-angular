import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBreakerComponent } from './code-breaker.component';

describe('CodeBreakerComponent', () => {
  let component: CodeBreakerComponent;
  let fixture: ComponentFixture<CodeBreakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeBreakerComponent]
    });
    fixture = TestBed.createComponent(CodeBreakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
