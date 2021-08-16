import { Component } from '@angular/core';
import { ContentService } from '../../content.service';
import { IGame } from '../../shared/interfaces/game';

@Component({
  selector: 'app-plan-to-play',
  templateUrl: './plan-to-play.component.html',
  styleUrls: ['./plan-to-play.component.scss']
})
export class PlanToPlayComponent {

  games: IGame[] | undefined;

  constructor(private contentService: ContentService) {
    this.getAllGames();
  }

  getAllGames(): void {
    this.games = undefined;
    this.contentService.loadGames().subscribe(games => this.games = games);
  }
}
