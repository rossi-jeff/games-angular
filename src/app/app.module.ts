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

@NgModule({
  declarations: [AppComponent, CodeBreakerComponent, HomeComponent, CodeBreakerOptionsComponent, CodeBreakerGuessFormComponent, CodeBreakerGuessListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
