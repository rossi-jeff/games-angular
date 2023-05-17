import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBreakerGuessListComponent } from './code-breaker-guess-list.component';

describe('CodeBreakerGuessListComponent', () => {
  let component: CodeBreakerGuessListComponent;
  let fixture: ComponentFixture<CodeBreakerGuessListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeBreakerGuessListComponent]
    });
    fixture = TestBed.createComponent(CodeBreakerGuessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
