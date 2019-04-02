import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Review} from '../models/review';
import {HttpClient} from '@angular/common/http';
import {REVIEW_MOCKED} from '../mocks/review.mock';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private reviewList: Review[] = REVIEW_MOCKED;
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

}
