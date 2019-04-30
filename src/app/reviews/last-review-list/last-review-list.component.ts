import {Component, OnInit} from '@angular/core';
import {Review} from '../../../models/review';
import {ReviewService} from '../../../services/reviewService';

@Component({
  selector: 'app-last-review-list',
  templateUrl: './last-review-list.component.html',
  styleUrls: ['./last-review-list.component.scss']
})
export class LastReviewListComponent implements OnInit {

  public lastReview: Review[] = [];

  constructor(public reviewService: ReviewService) {
    this.reviewService.getLastReviews(2);
    this.reviewService.reviews$.subscribe(value => this.lastReview = value);
  }

  ngOnInit() {
  }

}



