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

@NgModule({
  declarations: [
    AppComponent,
    AllGamesComponent,
    PlanToPlayComponent,
    NotFoundComponent,
    FinishedGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
