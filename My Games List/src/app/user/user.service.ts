import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { IUser } from '../shared/interfaces/user';


@Injectable()
export class UserService {

  user: IUser | null | undefined = undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(
    private http: HttpClient
  ) { }


  register(data: { email: string; password: string }) {
    return this.http.post<IUser>(`http://localhost:3000/user/register`, JSON.stringify(data)).pipe(
      tap((user) => this.user = user)
    );
  }
}