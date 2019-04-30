import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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
  constructor(public reviewService: ReviewService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => this.reviewService.getById(params.get('id')));
  }

}
