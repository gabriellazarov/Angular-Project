import { IGame } from './../../shared/interfaces/game';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { IUser } from '../../shared/interfaces/user';

import { environment } from '../../../environments/environment';
const API_URL = environment.apiURL;


@Injectable()
export class UserService {

  user: IUser | null | undefined = undefined;


  get isLogged(): boolean {
    return !!this.user;
  }

  get userInfo(): IUser | null | undefined {
    return this.user;
  }


  constructor(
    private http: HttpClient
  ) { }

  ///base functions
  register(data: { email: string; password: string }) {
    localStorage.clear();
    return this.http.post<IUser>(`${API_URL}/user/register`, data).pipe(
      tap((user) => this.user = user)
    );
  }

  login(data: { email: string; password: string }) {
    localStorage.clear();
    return this.http.post<any>(`${API_URL}/user/login`, data).pipe(
      tap((user) => this.user = user)
    );
  }

  logout() {
    localStorage.clear();
    return this.http.post<IUser>(`${API_URL}/user/logout`, {}).pipe(
      tap(() => this.user = null),
    );
  }



  ///other functions
  finishGame( gameId: string) {
    const userId = this.user?._id;
    return this.http.put<any>(`${API_URL}/games/finish/${gameId}`, { userId }).pipe(
      tap(() => {
        const removeIndex = this.user?.planToPlay.indexOf(gameId);
        if (removeIndex !== -1) {
          this.user?.planToPlay.splice(removeIndex!, 1);
        }
      }),
      tap(() => this.user?.finishedGames.push(gameId))
    );
  }

  planToPlay( gameId: string) {
    const userId = this.user?._id;
    return this.http.put<any>(`${API_URL}/games/plan/${gameId}`, { userId }).pipe(
      tap(() => {
        const removeIndex = this.user?.finishedGames.indexOf(gameId);
        if (removeIndex !== -1) {
          this.user?.finishedGames.splice(removeIndex!, 1);
        }
      }),
      tap(() => this.user?.planToPlay.push(gameId))
    );
  }

  scoreGame(gameId: string, score: any) {
    return this.http.post<any>(`${API_URL}/games/score/${gameId}`, { userId: this.user?._id, score: score });
  }
  getScore(game: IGame): any {
    const scores = game.scores;
    let userScore = 0;
    for (let score of scores) {
      if (score.userId == this.user?._id) {
        userScore = score.score;
      }
    }
    return userScore;
  }

  removeFromList(gameId: string) {
    const userId = this.user?._id;
    return this.http.post<any>(`${API_URL}/games/remove/${gameId}`, { userId }).pipe(
      tap(() => {
        const removeIndex = this.user?.finishedGames.indexOf(gameId);
        if (removeIndex !== -1) {
          this.user?.finishedGames.splice(removeIndex!, 1);
        }
      }),
      tap(() => {
        const removeIndex = this.user?.planToPlay.indexOf(gameId);
        if (removeIndex !== -1) {
          this.user?.planToPlay.splice(removeIndex!, 1);
        }
      })
    );
  }
}