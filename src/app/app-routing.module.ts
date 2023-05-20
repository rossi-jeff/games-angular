import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeBreakerComponent } from './code-breaker/code-breaker.component';
import { HomeComponent } from './home/home.component';
import { CodeBreakerScoresComponent } from './code-breaker-scores/code-breaker-scores.component';
import { CodeBreakerScoreDetailComponent } from './code-breaker-score-detail/code-breaker-score-detail.component';
import { GuessWordComponent } from './guess-word/guess-word.component';
import { GuessWordScoresComponent } from './guess-word-scores/guess-word-scores.component';
import { GuessWordScoreDetailComponent } from './guess-word-score-detail/guess-word-score-detail.component';
import { SeaBattleComponent } from './sea-battle/sea-battle.component';
import { SeaBattleScoresComponent } from './sea-battle-scores/sea-battle-scores.component';
import { SeaBattleScoreDetailsComponent } from './sea-battle-score-details/sea-battle-score-details.component';
import { HangManComponent } from './hang-man/hang-man.component';
import { HangManScoresComponent } from './hang-man-scores/hang-man-scores.component';
import { HangManScoreDetailsComponent } from './hang-man-score-details/hang-man-score-details.component';
import { YachtComponent } from './yacht/yacht.component';
import { YachtScoresComponent } from './yacht-scores/yacht-scores.component';
import { YachtScoreDetailsComponent } from './yacht-score-details/yacht-score-details.component';
import { TenGrandComponent } from './ten-grand/ten-grand.component';
import { TenGrandScoresComponent } from './ten-grand-scores/ten-grand-scores.component';
import { TenGrandScoreDetailsComponent } from './ten-grand-score-details/ten-grand-score-details.component';
import { FreeCellComponent } from './free-cell/free-cell.component';
import { FreeCellScoresComponent } from './free-cell-scores/free-cell-scores.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'code_breaker', component: CodeBreakerComponent },
  { path: 'code_breaker/scores', component: CodeBreakerScoresComponent },
  {
    path: 'code_breaker/scores/:id',
    component: CodeBreakerScoreDetailComponent,
  },
  { path: 'guess_word', component: GuessWordComponent },
  { path: 'guess_word/scores', component: GuessWordScoresComponent },
  { path: 'guess_word/scores/:id', component: GuessWordScoreDetailComponent },
  { path: 'sea_battle', component: SeaBattleComponent },
  { path: 'sea_battle/scores', component: SeaBattleScoresComponent },
  { path: 'sea_battle/scores/:id', component: SeaBattleScoreDetailsComponent },
  { path: 'hang_man', component: HangManComponent },
  { path: 'hang_man/scores', component: HangManScoresComponent },
  { path: 'hang_man/scores/:id', component: HangManScoreDetailsComponent },
  { path: 'yacht', component: YachtComponent },
  { path: 'yacht/scores', component: YachtScoresComponent },
  { path: 'yacht/scores/:id', component: YachtScoreDetailsComponent },
  { path: 'ten_grand', component: TenGrandComponent },
  { path: 'ten_grand/scores', component: TenGrandScoresComponent },
  { path: 'ten_grand/scores/:id', component: TenGrandScoreDetailsComponent },
  { path: 'free_cell', component: FreeCellComponent },
  { path: 'free_cell/scores', component: FreeCellScoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
