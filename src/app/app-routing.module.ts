import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeBreakerComponent } from './code-breaker/code-breaker.component';
import { HomeComponent } from './home/home.component';
import { CodeBreakerScoresComponent } from './code-breaker-scores/code-breaker-scores.component';
import { CodeBreakerScoreDetailComponent } from './code-breaker-score-detail/code-breaker-score-detail.component';
import { GuessWordComponent } from './guess-word/guess-word.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'code_breaker', component: CodeBreakerComponent },
  { path: 'code_breaker/scores', component: CodeBreakerScoresComponent },
  {
    path: 'code_breaker/scores/:id',
    component: CodeBreakerScoreDetailComponent,
  },
  { path: 'guess_word', component: GuessWordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
