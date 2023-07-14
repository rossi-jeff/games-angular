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
import { TenGrandComponent } from './ten-grand/ten-grand.component';
import { TenGrandCurrentTurnComponent } from './ten-grand-current-turn/ten-grand-current-turn.component';
import { TenGrandScoreCardComponent } from './ten-grand-score-card/ten-grand-score-card.component';
import { TenGrandTurnComponent } from './ten-grand-turn/ten-grand-turn.component';
import { TenGrandOptionsComponent } from './ten-grand-options/ten-grand-options.component';
import { TenGrandScoresComponent } from './ten-grand-scores/ten-grand-scores.component';
import { TenGrandScoreDetailsComponent } from './ten-grand-score-details/ten-grand-score-details.component';
import { TenGrandScoreRowComponent } from './ten-grand-score-row/ten-grand-score-row.component';
import { FreeCellComponent } from './free-cell/free-cell.component';
import { PlayingCardComponent } from './playing-card/playing-card.component';
import { FreeCellScoresComponent } from './free-cell-scores/free-cell-scores.component';
import { FreeCellScoreRowComponent } from './free-cell-score-row/free-cell-score-row.component';
import { KlondikeComponent } from './klondike/klondike.component';
import { KlondikeScoresComponent } from './klondike-scores/klondike-scores.component';
import { KlondikeScoreRowComponent } from './klondike-score-row/klondike-score-row.component';
import { ConcentrationComponent } from './concentration/concentration.component';
import { ConcentrationScoresComponent } from './concentration-scores/concentration-scores.component';
import { ConcentrationScoreRowComponent } from './concentration-score-row/concentration-score-row.component';
import { PaginationControlsComponent } from './pagination-controls/pagination-controls.component';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { SignInDialogComponent } from './sign-in-dialog/sign-in-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapXCircle, bootstrapJustify } from '@ng-icons/bootstrap-icons';
import { CodeBreakerDirectionsComponent } from './code-breaker-directions/code-breaker-directions.component';
import { GuessWordDirectionsComponent } from './guess-word-directions/guess-word-directions.component';
import { SeaBattleDirectionsComponent } from './sea-battle-directions/sea-battle-directions.component';
import { HangManDirectionsComponent } from './hang-man-directions/hang-man-directions.component';
import { YachtDirectionsComponent } from './yacht-directions/yacht-directions.component';
import { TenGrandDirectionsComponent } from './ten-grand-directions/ten-grand-directions.component';
import { FreeCellDirectionsComponent } from './free-cell-directions/free-cell-directions.component';
import { KlondikeDirectionsComponent } from './klondike-directions/klondike-directions.component';
import { ConcentrationDirectionsComponent } from './concentration-directions/concentration-directions.component';
import { PokerSquaresComponent } from './poker-squares/poker-squares.component';
import { PokerSquaresDirectionsComponent } from './poker-squares-directions/poker-squares-directions.component';
import { PokerSquaresScoresComponent } from './poker-squares-scores/poker-squares-scores.component';
import { PokerSquaresScoreRowComponent } from './poker-squares-score-row/poker-squares-score-row.component';
import { SpiderComponent } from './spider/spider.component';
import { SpiderScoresComponent } from './spider-scores/spider-scores.component';
import { SpiderScoreRowComponent } from './spider-score-row/spider-score-row.component';

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
    TenGrandComponent,
    TenGrandCurrentTurnComponent,
    TenGrandScoreCardComponent,
    TenGrandTurnComponent,
    TenGrandOptionsComponent,
    TenGrandScoresComponent,
    TenGrandScoreDetailsComponent,
    TenGrandScoreRowComponent,
    FreeCellComponent,
    PlayingCardComponent,
    FreeCellScoresComponent,
    FreeCellScoreRowComponent,
    KlondikeComponent,
    KlondikeScoresComponent,
    KlondikeScoreRowComponent,
    ConcentrationComponent,
    ConcentrationScoresComponent,
    ConcentrationScoreRowComponent,
    PaginationControlsComponent,
    RegisterDialogComponent,
    SignInDialogComponent,
    HeaderBarComponent,
    FooterBarComponent,
    SidePanelComponent,
    CodeBreakerDirectionsComponent,
    GuessWordDirectionsComponent,
    SeaBattleDirectionsComponent,
    HangManDirectionsComponent,
    YachtDirectionsComponent,
    TenGrandDirectionsComponent,
    FreeCellDirectionsComponent,
    KlondikeDirectionsComponent,
    ConcentrationDirectionsComponent,
    PokerSquaresComponent,
    PokerSquaresDirectionsComponent,
    PokerSquaresScoresComponent,
    PokerSquaresScoreRowComponent,
    SpiderComponent,
    SpiderScoresComponent,
    SpiderScoreRowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({
      bootstrapXCircle,
      bootstrapJustify,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
