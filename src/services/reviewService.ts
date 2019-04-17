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
  private review: Review;


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


  getLastReviews(count: number) {
    this.http.get<Review[]>(`${this.url}/api/reviews`).subscribe(value => {
      let reviews = value;
      reviews = reviews.sort((i1, i2) => {
        if (i1.Date < i2.Date) {
          return -1;
        }
        if (i1.Date > i2.Date) {
          return 1;
        }
        return 0;
      });
      this.reviewList = reviews.slice(0, count);

      this.reviews$.next(this.reviewList);
      console.log(this.reviewList);
    });
  }


  /*
    getLastReview(): void {
      this.getReview();
      this.reviewList.sort((r1, r2) => r1.Date >  r2.Date);
      console.log(this.reviewList);
      this.reviewList.slice(0, 1);
      console.log(this.reviewList);
    }
  */
  /*
    getLastReview(): void {
      this.getReview();
      this.reviewList.filter(value => value.Country === 'Canada');
      /*this.reviewList.sort((r1, r2) => r1.Date.getDate() > r2.Date.getDate() ? 1 : 0);
      console.log(this.reviewList);
      this.reviewList.slice(0, 1);
      console.log(this.reviewList);
    }
    */
}
