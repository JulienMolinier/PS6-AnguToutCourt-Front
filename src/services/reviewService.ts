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
  public reviewViewed$: BehaviorSubject<Review> = new BehaviorSubject<Review>(null);
  private url = 'http://localhost:9428';
  private review: Review;

  constructor(private http: HttpClient) {
  }

  getById(id: string) {
    this.http.get<Review>(`${this.url}/api/reviews/${id}`).subscribe(value => {
      this.review = value;
      this.reviewViewed$.next(this.review);
      console.log(this.review);
    });
  }

  getReview() {
    this.http.get<Review[]>(`${this.url}/api/reviews/?verified=true`).subscribe(value => {
      this.reviewList = value;
      this.reviews$.next(this.reviewList);
      console.log(this.reviewList);
    });
  }

  async getReviewsAsync() {
    this.reviewList = await this.http.get<Review[]>(`${this.url}/api/reviews/?verified=true`).toPromise();
    this.reviews$.next(this.reviewList);
  }

  postReview(review: Review) {
    this.http.post(`${this.url}/api/reviews`, review).subscribe(value => {
      this.getReview();
      console.log('added');
    });
  }

  getLastReviews(count: number) {
    this.http.get<Review[]>(`${this.url}/api/reviews/?verified=true`).subscribe(value => {
      let reviews = value;
      reviews = reviews.sort((i1, i2) => {
        if (i1.Date < i2.Date) {
          return 1;
        }
        if (i1.Date > i2.Date) {
          return -1;
        }
        return 0;
      });
      this.reviewList = reviews.slice(0, count);

      this.reviews$.next(this.reviewList);
      console.log(this.reviewList);
    });
  }

}
