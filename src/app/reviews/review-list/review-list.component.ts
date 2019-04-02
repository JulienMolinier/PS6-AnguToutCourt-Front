import {Component, OnInit} from '@angular/core';
import {Review} from '../../../models/review';
import {ReviewService} from '../../../services/reviewService';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {
  public reviewList: Review[] = [];

  constructor(public reviewService: ReviewService) {
    this.reviewService.getReview();
    this.reviewService.reviews$.subscribe((reviews) => this.reviewList = reviews);
  }

  ngOnInit() {
  }

}
