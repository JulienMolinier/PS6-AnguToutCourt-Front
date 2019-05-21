import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from 'src/models/User';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:9428';
  public isLogged;
  public user$: BehaviorSubject<User> = new BehaviorSubject(null);
  private user: User;

  constructor(private http: HttpClient) {
    this.isLogged = !!this.getToken() || false;
    if (this.getUserFromLocal() !== null) {
      this.user = JSON.parse(this.getUserFromLocal());
      this.user$.next(this.user);
    } else {
      this.user = {firstName: '', lastName: '', email: '', isAdmin: false};
      this.user$.next(this.user);
    }
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${this.url}/api/login`, {username, password});
  }

  setUser(user) {
    this.user = user;
  }

  saveToken(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.isLogged = true;
  }

  getUserFromLocal() {
    return localStorage.getItem('user');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.isLogged = false;
  }
}
