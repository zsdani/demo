import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../class/User";
import {Router} from "@angular/router";



export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': '',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://localhost:8080/owner';

  public isLoggedIn = false;
  public user: User | undefined;
  public redirectUrl: string | undefined;
  authenticated = false;
  loggedUser: User = new User();

  constructor(
    private http: HttpClient, private router: Router
  ) { }

  public async login(username: string, password: string): Promise<User> {
    try {
      const token = btoa(`${username}:${password}`);
      httpOptions.headers = httpOptions.headers.set('Authorization', `Basic ${token}`);
      const user = await this.http.post<User>(`${this.authUrl}/login`, {}, httpOptions).toPromise();
      this.isLoggedIn = true;
      this.user = user;
      return Promise.resolve(this.user);
    } catch (e) {
      console.log(e);
      return Promise.reject();
    }
  }

  public logout(): void {
      httpOptions.headers = httpOptions.headers.set('Authorization', ``);
      this.isLoggedIn = false;
      //this.user = null;
      this.router.navigate(['/login']);
  }





}
