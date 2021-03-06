import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Review} from '../../../models/review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input()
  review: Review;

  @Output()
  showReviewDetails: EventEmitter<Review> = new EventEmitter<Review>();

  constructor() {
  }

  ngOnInit() {
  }
  reviewDetails() {
    this.showReviewDetails.emit(this.review);
  }

}
