import { Router } from '@angular/router';
import { IGame } from '../../shared/interfaces/game';
import { ContentService } from '../../core/services/content.service';
import { UserService } from '../../core/services/user.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {


  topFGames: IGame[] | undefined = undefined;
  topPtPGames: IGame[] | undefined = undefined;
  user = this.userService.userInfo;

  constructor(
    private userService: UserService,
    private contentService: ContentService,
    private router: Router
  ) {
    this.getTopFinishedGames();
    this.getTopPlannedGames();
  }




  getTopFinishedGames(): void {
    this.topFGames = undefined;
    this.contentService.loadFinishedGames(this.userService.userInfo?._id!)
      .subscribe(games => this.topFGames = games
        .sort((a: IGame, b: IGame) => Number(this.contentService.getAverageScore(b)) - Number(this.contentService.getAverageScore(a)))
        .slice(0, 3));
  }

  getTopPlannedGames(): void {
    this.topPtPGames = undefined;
    this.contentService.loadPlanToPlay(this.userService.userInfo?._id!)
      .subscribe(games => this.topPtPGames = games
        .sort((a: IGame, b: IGame) => Number(this.contentService.getAverageScore(b)) - Number(this.contentService.getAverageScore(a)))
        .slice(0, 3));
  }

  getAverageScore(game: IGame) {
    return this.contentService.getAverageScore(game);
  }


  updateProfile(form: NgForm): void {
    if (form.invalid) { return; }
    this.userService.updateProfile(form.value).subscribe({
      next: () => {
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
