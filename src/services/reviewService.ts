import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Review} from '../models/review';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private reviewList: Review[];
  public reviews$: BehaviorSubject<Review[]> = new BehaviorSubject(this.reviewList);
  private url = 'http://localhost:9428';


  constructor(private http: HttpClient) {
  }

  getReview() {
    this.http.get<Review[]>(`${this.url}/api/reviews`).subscribe(value => {
      this.reviewList = value;
      this.reviews$.next(this.reviewList);
      console.log(this.reviewList);
    });
  }

  postReview(review: Review) {
    this.http.post(`${this.url}/api/reviews`, review).subscribe(value => {
      this.getReview();
      console.log('added');
    });
  }

}
