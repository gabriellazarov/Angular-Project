import { Component } from '@angular/core';
import { ContentService } from '../../content.service';
import { IGame } from '../../shared/interfaces/game';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.scss']
})
export class AllGamesComponent {

  games: IGame[] | undefined;

  constructor(private contentService: ContentService) {
    this.getAllGames();
  }

  getAllGames(): void {
    this.games = undefined;
    this.contentService.loadGames().subscribe(games => this.games = games);
  }
}
