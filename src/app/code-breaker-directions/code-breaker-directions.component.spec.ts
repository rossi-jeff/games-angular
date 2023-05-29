import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBreakerDirectionsComponent } from './code-breaker-directions.component';

describe('CodeBreakerDirectionsComponent', () => {
  let component: CodeBreakerDirectionsComponent;
  let fixture: ComponentFixture<CodeBreakerDirectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeBreakerDirectionsComponent]
    });
    fixture = TestBed.createComponent(CodeBreakerDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
