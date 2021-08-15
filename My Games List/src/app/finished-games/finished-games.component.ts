import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { IGame } from '../shared/interfaces/game';

@Component({
  selector: 'app-finished-games',
  templateUrl: './finished-games.component.html',
  styleUrls: ['./finished-games.component.scss']
})
export class FinishedGamesComponent {

  games: IGame[] | undefined;

  constructor(private contentService: ContentService) {
    this.getAllGames();
  }

  getAllGames(): void {
    this.games = undefined;
    this.contentService.loadGames().subscribe(games => this.games = games);
  }
}
