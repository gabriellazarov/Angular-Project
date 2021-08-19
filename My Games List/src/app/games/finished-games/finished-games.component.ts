import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { UserService } from '../../core/services/user.service';
import { IGame } from '../../shared/interfaces/game';

@Component({
  selector: 'app-finished-games',
  templateUrl: './finished-games.component.html',
  styleUrls: ['./finished-games.component.scss']
})
export class FinishedGamesComponent {

  games: IGame[] | undefined;

  constructor(
    private userService: UserService,
    private contentService: ContentService,
    private router: Router
  ) {
    this.getFinishedGames();
  }

  getAverageScore(game: IGame) {
    return this.contentService.getAverageScore(game);
  }

  userScore(game: IGame) {
    return this.userService.getScore(game);
  }

  getFinishedGames(): void {
    this.games = undefined;
    this.contentService.loadFinishedGames(this.userService.userInfo?._id!).subscribe(games => this.games = games);
  }

  scoreThisGame(gameId: string, score: any): void {
    this.userService.scoreGame(gameId, score).subscribe({
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
