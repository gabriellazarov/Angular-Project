import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { ContentService } from '../../core/services/content.service';
import { IGame } from '../../shared/interfaces/game';

@Component({
  selector: 'app-plan-to-play',
  templateUrl: './plan-to-play.component.html',
  styleUrls: ['./plan-to-play.component.scss']
})
export class PlanToPlayComponent {

  games: IGame[] | undefined;


  constructor(
    private contentService: ContentService,
    private userService: UserService,
    private router: Router
  ) {
    this.getPlanToPlay();
  }

  getAverageScore(game: IGame) {
    return this.contentService.getAverageScore(game);
  }

  getPlanToPlay(): void {
    this.games = undefined;
    this.contentService.loadPlanToPlay(this.userService.userInfo?._id!).subscribe(games => this.games = games);
  }

  finishThisGame(gameId: string): void {
    this.userService.finishGame(gameId).subscribe({
      next: () => {
        let currentUrl = this.router.url;
         this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  removeThisGame(gameId: string): void {
    this.userService.removeFromList(gameId).subscribe({
      next: () => {
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
