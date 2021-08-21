import { AuthActivate } from './core/guards/auth.activate';
import { ProfilePageComponent } from './user/profile-page/profile-page.component';
import { RegisterPageComponent } from './user/register-page/register-page.component';
import { LoginPageComponent } from './user/login-page/login-page.component';
import { FinishedGamesComponent } from './games/finished-games/finished-games.component';
import { PlanToPlayComponent } from './games/plan-to-play/plan-to-play.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AllGamesComponent } from './games/all-games/all-games.component';
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
    component: PlanToPlayComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: true,
      authenticationFailureRedirectUrl: '/',
    }
  },
  {
    path: 'finished-games',
    component: FinishedGamesComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: true,
      authenticationFailureRedirectUrl: '/',
    }
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: false,
      authenticationFailureRedirectUrl: '/',
    }
  },
  {
    path: 'register',
    component: RegisterPageComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: false,
      authenticationFailureRedirectUrl: '/',
    }
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: true,
      authenticationFailureRedirectUrl: '/login',
    }
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
