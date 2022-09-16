import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  CurrentUser!: any;
  loginUser(userName: string, password: string) {
    // this.CurrentUser = {
    //   id: 1,
    //   firstName: 'Ibrahim',
    //   lastName: 'Mustafa',
    //   userName: 'Ibrahim Mustafa',
    // };
    const loginInfo = { username: userName, password: password };
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http
      .post('/api/login', loginInfo, options)
      .pipe(
        tap((data: any) => {
          this.CurrentUser = <IUser>data.user;
        })
      )
      .pipe(
        catchError((error) => {
          return of(false);
        })
      );
  }
  isAuthenticated(): boolean {
    return !!this.CurrentUser;
  }
  UpdateUserProfile(firstName: string, lastName: string) {
    this.CurrentUser.firstName = firstName;
    this.CurrentUser.lastName = lastName;
    return this.http.put(`/api/users/${this.CurrentUser.id}`, this.CurrentUser);
  }
  checkAuthenticationStatus() {
    this.http.get('/api/currentIdentity').subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.CurrentUser = data;
      }
    });
  }
  logout() {
    this.CurrentUser = undefined;
    return this.http.post('/api/logout', {});
  }
}
