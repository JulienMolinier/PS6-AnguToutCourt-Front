import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Review} from '../../../models/review';
import {ReviewService} from '../../../services/reviewService';

@Component({
  selector: 'app-review-list-print',
  templateUrl: './review-list-print.component.html',
  styleUrls: ['./review-list-print.component.scss']
})
export class ReviewListPrintComponent implements OnInit {
  private reviewList: Review[] = [];
  @Input()
  review: Review;

  @Output()
  showReviewDetails: EventEmitter<Review> = new EventEmitter<Review>();

  constructor(public reviewService: ReviewService) {
    this.reviewService.getReview();
    this.reviewService.reviews$.subscribe((reviews) => {
      this.reviewList = reviews;
    });
  }

  ngOnInit() {
  }

  ReviewDetails() {
    this.showReviewDetails.emit(this.review);
  }
}
