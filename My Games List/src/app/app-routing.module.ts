import { FinishedGamesComponent } from './finished-games/finished-games.component';
import { PlanToPlayComponent } from './plan-to-play/plan-to-play.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AllGamesComponent } from './all-games/all-games.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/all-games'
  },
  {
    path: 'all-games',
    component: AllGamesComponent
  },
  {
    path: 'plan-to-play',
    component: PlanToPlayComponent
  },
  {
    path: 'finished-games',
    component: FinishedGamesComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
