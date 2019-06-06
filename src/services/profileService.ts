import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Profile} from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private url = 'http://localhost:9428';

  constructor(private http: HttpClient) {
  }

  postProfile(profile: Profile) {
    this.http.post(`${this.url}/api/profiles`, profile).subscribe(value => {
        console.log('added');
      },
      error1 => {
        throw new Error(error1);
      });

  }

}
