import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGame } from '../../shared/interfaces/game';

import { environment } from '../../../environments/environment';
const API_URL = environment.apiURL;

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) { }

  loadGames() {
    return this.http.get<IGame[]>(`${API_URL}/games/get`);
  }

  loadFinishedGames(id: string) {
    return this.http.get<any>(`${API_URL}/games/finished/${id}`, { withCredentials: true });
  }

  loadPlanToPlay(id: string) {
    return this.http.get<any>(`${API_URL}/games/planned/${id}`, { withCredentials: true });
  }

  getAverageScore(game: IGame) {
    let br = 0
    let total = 0;
    for (let score of game.scores) {
      br += 1;
      total += score.score;
    }
    if (br == 0) return 0;
    return parseFloat((total / br).toFixed(2));
  }
}