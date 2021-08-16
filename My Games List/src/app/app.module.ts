import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { ContentService } from './content.service';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllGamesComponent } from './all-games/all-games.component';
import { PlanToPlayComponent } from './plan-to-play/plan-to-play.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FinishedGamesComponent } from './finished-games/finished-games.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AllGamesComponent,
    PlanToPlayComponent,
    NotFoundComponent,
    FinishedGamesComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
