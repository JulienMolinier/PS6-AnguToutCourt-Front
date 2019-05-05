import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:9428';
  private user = {firstName : '', lastName : '', email : ''};

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.post<User>(`${this.url}/api/login`, {username, password});
  }

  setUser(user) {
    this.user = user;
  }
  saveToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}
