import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBreakerScoreRowComponent } from './code-breaker-score-row.component';

describe('CodeBreakerScoreRowComponent', () => {
  let component: CodeBreakerScoreRowComponent;
  let fixture: ComponentFixture<CodeBreakerScoreRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeBreakerScoreRowComponent]
    });
    fixture = TestBed.createComponent(CodeBreakerScoreRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
