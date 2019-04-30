import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Review} from '../../../models/review';
import {ReviewService} from '../../../services/reviewService';
import {ActivatedRoute} from '@angular/router';
import {UniversityService} from '../../../services/universityService';
import {University} from '../../../models/university';
import {ReviewInfosComponent} from '../../review-info/review-infos/review-infos.component';
import {Router} from '@angular/router';

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
  private reviewsLoaded: Promise<boolean>;
  private size = 0;

  constructor(public reviewService: ReviewService, private route: ActivatedRoute, private router: Router,
              private univService: UniversityService) {
    const promise = this.reviewService.getReviewsAsync();
    promise.then(value => {
      this.reviewService.reviews$.subscribe((reviews) => {
        this.reviewList = reviews;
        this.initialReviewList = this.reviewList;
        this.size = reviews.length;
        this.getUniversitiesList();
        this.getCountryList();
        this.reviewsLoaded = Promise.resolve(true);
      });
    }).catch((error) => {
      console.log(error);
    });

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('univId');
    const univ = this.univService.getByIdAsync(id);
    univ.then(value => {
      this.filters[0] = this.univService.universityViewed$.getValue().name;
      this.onChangeFilter();
    }).catch((error) => {
      console.log(error);
    });
  }

  getUniversitiesList() {
    let i;
    this.universityList = [];
    console.log(this.reviewList);
    for (i = 0; i < this.size; i++) {
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

  onChangeFilter() {
    this.reviewList = this.initialReviewList;
    for (let i = 0; i <= this.filters.length; i++) {
      if (i === 0 && this.filters[i] !== null) {
        this.reviewList = this.reviewList.filter(value => value.university.name === this.filters[i]);
      } else if (i === 2 && this.filters[i] !== null) {
        this.reviewList = this.reviewList.filter(value => value.university.country === this.filters[i]);
      } else if (i === 1 && this.filters[i] !== null) {
        this.reviewList = this.reviewList.filter(value => value.Rate.toString() === this.filters[1]);
      }
    }
  }

  navigateReviewsDetails(review: Review) {
    this.router.navigate([`/reviews/${review.id}`]);
  }



  resetResearchList() {
    this.filters = [null, null, null];
    this.reviewList = this.initialReviewList;
    this.getUniversitiesList();
    this.getCountryList();
  }
}
