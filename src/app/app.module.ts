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
import { GuessWordHintListComponent } from './guess-word-hint-list/guess-word-hint-list.component';
import { GuessWordScoresComponent } from './guess-word-scores/guess-word-scores.component';
import { GuessWordScoreRowComponent } from './guess-word-score-row/guess-word-score-row.component';
import { GuessWordScoreDetailComponent } from './guess-word-score-detail/guess-word-score-detail.component';
import { SeaBattleComponent } from './sea-battle/sea-battle.component';
import { SeaBattleOptionsComponent } from './sea-battle-options/sea-battle-options.component';
import { SeaBattlePlacementComponent } from './sea-battle-placement/sea-battle-placement.component';
import { SeaBattlePlayerTurnComponent } from './sea-battle-player-turn/sea-battle-player-turn.component';
import { SeaBattleOpponentTurnComponent } from './sea-battle-opponent-turn/sea-battle-opponent-turn.component';
import { SeaBattleShipDisplayComponent } from './sea-battle-ship-display/sea-battle-ship-display.component';
import { SeaBattleScoresComponent } from './sea-battle-scores/sea-battle-scores.component';
import { SeaBattleScoreDetailsComponent } from './sea-battle-score-details/sea-battle-score-details.component';
import { SeaBattleScoreRowComponent } from './sea-battle-score-row/sea-battle-score-row.component';
import { HangManComponent } from './hang-man/hang-man.component';
import { HangManOptionsComponent } from './hang-man-options/hang-man-options.component';
import { HangManButtonsComponent } from './hang-man-buttons/hang-man-buttons.component';
import { HangManDisplayComponent } from './hang-man-display/hang-man-display.component';
import { HangManDrawingComponent } from './hang-man-drawing/hang-man-drawing.component';
import { HangManWordComponent } from './hang-man-word/hang-man-word.component';
import { HangManScoresComponent } from './hang-man-scores/hang-man-scores.component';
import { HangManScoreDetailsComponent } from './hang-man-score-details/hang-man-score-details.component';
import { HangManScoreRowComponent } from './hang-man-score-row/hang-man-score-row.component';
import { YachtComponent } from './yacht/yacht.component';
import { YachtRollComponent } from './yacht-roll/yacht-roll.component';
import { YachtScoreOptionsComponent } from './yacht-score-options/yacht-score-options.component';
import { YachtScoreCardComponent } from './yacht-score-card/yacht-score-card.component';
import { SmallDiceRollComponent } from './small-dice-roll/small-dice-roll.component';
import { YachtScoresComponent } from './yacht-scores/yacht-scores.component';
import { YachtScoreDetailsComponent } from './yacht-score-details/yacht-score-details.component';
import { YachtScoreRowComponent } from './yacht-score-row/yacht-score-row.component';

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
    GuessWordHintListComponent,
    GuessWordScoresComponent,
    GuessWordScoreRowComponent,
    GuessWordScoreDetailComponent,
    SeaBattleComponent,
    SeaBattleOptionsComponent,
    SeaBattlePlacementComponent,
    SeaBattlePlayerTurnComponent,
    SeaBattleOpponentTurnComponent,
    SeaBattleShipDisplayComponent,
    SeaBattleScoresComponent,
    SeaBattleScoreDetailsComponent,
    SeaBattleScoreRowComponent,
    HangManComponent,
    HangManOptionsComponent,
    HangManButtonsComponent,
    HangManDisplayComponent,
    HangManDrawingComponent,
    HangManWordComponent,
    HangManScoresComponent,
    HangManScoreDetailsComponent,
    HangManScoreRowComponent,
    YachtComponent,
    YachtRollComponent,
    YachtScoreOptionsComponent,
    YachtScoreCardComponent,
    SmallDiceRollComponent,
    YachtScoresComponent,
    YachtScoreDetailsComponent,
    YachtScoreRowComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
