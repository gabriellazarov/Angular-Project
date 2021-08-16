import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGame } from './shared/interfaces/game';

import { environment } from '../environments/environment';
const API_URL = environment.apiURL;

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) { }

  loadGames() {
    return this.http.get<IGame[]>(`${API_URL}/games/get`);
  }
}