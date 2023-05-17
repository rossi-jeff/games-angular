import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CodeBreakerComponent } from './code-breaker/code-breaker.component';
import { HomeComponent } from './home/home.component';
import { CodeBreakerOptionsComponent } from './code-breaker-options/code-breaker-options.component';
import { CodeBreakerGuessFormComponent } from './code-breaker-guess-form/code-breaker-guess-form.component';
import { CodeBreakerGuessListComponent } from './code-breaker-guess-list/code-breaker-guess-list.component';
import { CodeBreakerScoresComponent } from './code-breaker-scores/code-breaker-scores.component';
import { CodeBreakerScoreRowComponent } from './code-breaker-score-row/code-breaker-score-row.component';
import { CodeBreakerScoreDetailComponent } from './code-breaker-score-detail/code-breaker-score-detail.component';
import { CodeBreakerSolutionComponent } from './code-breaker-solution/code-breaker-solution.component';
import { GuessWordComponent } from './guess-word/guess-word.component';
import { GuessWordOptionsComponent } from './guess-word-options/guess-word-options.component';
import { GuessWordGuessFormComponent } from './guess-word-guess-form/guess-word-guess-form.component';
import { GuessWordGuessListComponent } from './guess-word-guess-list/guess-word-guess-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeBreakerComponent,
    HomeComponent,
    CodeBreakerOptionsComponent,
    CodeBreakerGuessFormComponent,
    CodeBreakerGuessListComponent,
    CodeBreakerScoresComponent,
    CodeBreakerScoreRowComponent,
    CodeBreakerScoreDetailComponent,
    CodeBreakerSolutionComponent,
    GuessWordComponent,
    GuessWordOptionsComponent,
    GuessWordGuessFormComponent,
    GuessWordGuessListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
