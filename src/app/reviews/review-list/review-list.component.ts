import {Component, OnInit} from '@angular/core';
import {Review} from '../../../models/review';
import {ReviewService} from '../../../services/reviewService';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {
  private reviewList: Review[] = [];
  private initialReviewList: Review[] = [];
  private rateList: string[] = ['0', '1', '2', '3', '4', '5'];
  private universityList: string[];
  private countryList: string[];
  private filters: string[] = [null, null, null];

  constructor(public reviewService: ReviewService) {
    this.reviewService.getReview();
    this.reviewService.reviews$.subscribe((reviews) => {
      this.reviewList = reviews;
      this.initialReviewList = [...this.reviewList];
    });
    this.getUniversitiesList();
    this.getCountryList();
  }

  ngOnInit() {
  }

  getUniversitiesList() {
    let i;
    this.universityList = [];
    for (i = 0; i < this.reviewList.length; i++) {
      if (this.universityList.indexOf(this.reviewList[i].university.name) < 0) {
        this.universityList.push(this.reviewList[i].university.name);
      }
    }
  }

  getCountryList() {
    let i;
    this.countryList = [];
    for (i = 0; i < this.reviewList.length; i++) {
      if (this.countryList.indexOf(this.reviewList[i].university.country) < 0) {
        this.countryList.push(this.reviewList[i].university.country);
      }
    }
  }

  filterByUniversity() {
    this.reviewList = this.initialReviewList.filter(value => value.university.name === this.filters[0]);
  }

  filterByCountry() {
    this.reviewList = this.initialReviewList.filter(value => value.university.country === this.filters[2]);
  }

  filterByRate() {
    this.reviewList = this.initialReviewList.filter(value => value.Rate.toString() === this.filters[1]);
  }

  resetResearchList() {
    this.filters = [null, null, null];
    this.reviewService.getReview();
    this.reviewService.reviews$.subscribe((reviews) => {
      this.reviewList = reviews;
      this.initialReviewList = [...this.reviewList];
    });
    this.getUniversitiesList();
    this.getCountryList();
  }
}
