import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ReviewService} from '../../../services/reviewService';
import {Review} from '../../../models/review';

@Component({
  selector: 'app-review-infos',
  templateUrl: './review-infos.component.html',
  styleUrls: ['./review-infos.component.scss']
})
export class ReviewInfosComponent implements OnInit {
  id: number;
  public review: Review;
  constructor(public reviewService: ReviewService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => this.reviewService.getById(params.get('id')));
  }


  goToUniversity(review: Review) {
    this.router.navigate([`/university/${review.universityId}`]);

  }


}
