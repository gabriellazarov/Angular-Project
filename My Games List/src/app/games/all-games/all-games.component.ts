import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { IGame } from '../../shared/interfaces/game';
import { ContentService } from '../../core/services/content.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.scss']
})
export class AllGamesComponent {

  games: IGame[] | undefined;

  constructor(
    private userService: UserService,
    private contentService: ContentService,
    private router: Router
  ) {
    this.getAllGames();
  }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  getAverageScore(game: IGame) {
    return this.contentService.getAverageScore(game);
  }

  userScore(game: IGame) {
    return this.userService.getScore(game);
  }

  getAllGames(): void {
    this.games = undefined;
    this.contentService.loadGames().subscribe(games => this.games = games);
  }

  finishThisGame(gameId: string): void {
    this.userService.finishGame(gameId).subscribe({
      error: (err) => {
        console.log(err);
      }
    });
  }

  planThisGame(gameId: string): void {
    this.userService.planToPlay(gameId).subscribe({
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


  gameIsInFG(gameId: string): boolean {
    return this.userService.userInfo!.finishedGames.includes(gameId);
  }

  gameIsInPTP(gameId: string): boolean {
    return this.userService.userInfo!.planToPlay.includes(gameId);
  }
}

