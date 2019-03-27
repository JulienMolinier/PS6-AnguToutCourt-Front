import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/index';
import {University} from '../models/university';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  private url = 'http://localhost:9428';
  private universityList: University[];

  public universities$: BehaviorSubject<University[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
  }

  getById(id: number) {
    const university = this.universityList.find(
      (s) => {
        return s.id === id;
      }
    );
    return university;
  }

  getUniversities() {
    this.http.get<University[]>(`${this.url}/api/universities`).subscribe(value => {
      this.universityList = value;
      this.universities$.next(this.universityList);
      console.log(this.universityList);
    });
  }
}
