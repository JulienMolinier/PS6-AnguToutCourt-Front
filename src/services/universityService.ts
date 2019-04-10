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

  async getByIdAsync(id: string) {
    this.university = await this.http.get<University>(`${this.url}/api/universities/${id}`).toPromise();
  }

  addARate(id: string, rateToAdd: number) {
    const promise = this.getByIdAsync(id);
    promise
      .then(response => {
        console.log(response);
        this.university.rates.push(rateToAdd);
        this.university.rate = 0;
        for (let r of this.university.rates) {
          this.university.rate += r;
        }
        this.university.nbReviews += 1;
        this.university.rate /= this.university.nbReviews;
        console.log(this.university);
        this.putUniversity();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  putUniversity() {
    this.http.put(`${this.url}/api/universities/${this.university.id}`, this.university).subscribe(value => {
      console.log(value);
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
