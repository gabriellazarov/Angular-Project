import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FinishedGamesComponent } from './finished-games/finished-games.component';
import { PlanToPlayComponent } from './plan-to-play/plan-to-play.component';
import { AllGamesComponent } from './all-games/all-games.component';


@NgModule({
  declarations: [
    AllGamesComponent,
    PlanToPlayComponent,
    FinishedGamesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class GamesModule { }
