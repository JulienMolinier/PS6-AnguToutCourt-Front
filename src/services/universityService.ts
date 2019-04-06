import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {University} from '../models/university';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  private url = 'http://localhost:9428';
  private universityList: University[];
  private university: University;

  public universities$: BehaviorSubject<University[]> = new BehaviorSubject([]);
  public universityViewed$: BehaviorSubject<University> = new BehaviorSubject<University>(null);

  constructor(private http: HttpClient) {
  }

  getById(id: string) {
    this.http.get<University>(`${this.url}/api/universities/${id}`).subscribe(value => {
      this.university = value;
      this.universityViewed$.next(this.university);
      console.log(this.university);
    });
  }

  getUniversities() {
    this.http.get<University[]>(`${this.url}/api/universities`).subscribe(value => {
      this.universityList = value;
      this.universities$.next(this.universityList);
      console.log(this.universityList);
    });
  }
}
