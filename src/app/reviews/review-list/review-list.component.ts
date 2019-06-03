import {Component, OnInit} from '@angular/core';
import {Review} from '../../../models/review';
import {ReviewService} from '../../../services/reviewService';
import {ActivatedRoute, Router} from '@angular/router';
import {UniversityService} from '../../../services/universityService';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {


  private reviewList: Review[] = [];
  pageSize = 6;
  private initialReviewList: Review[] = [];
  private rateList: string[] = ['0', '1', '2', '3', '4', '5'];
  private universityList: string[];
  private countryList: string[];
  private filters: string[] = [null, null, null];
  private reviewsLoaded: Promise<boolean>;
  private size = 0;
  pageSizeOptions: number[] = [3, 6, 9, 12];
  private reviewListPaginated: Review[] = [];
  private pageEvent: PageEvent;


  constructor(public reviewService: ReviewService, private route: ActivatedRoute, private router: Router,
              private univService: UniversityService) {
    this.pageEvent = new PageEvent();
    const promise = this.reviewService.getReviewsAsync();
    promise.then(value => {
      this.reviewService.reviews$.subscribe((reviews) => {
        reviews = reviews.sort((i1, i2) => {
          if (i1.Date < i2.Date) {
            return 1;
          }
          if (i1.Date > i2.Date) {
            return -1;
          }
          return 0;
        });
        this.reviewList = reviews;
        this.initialReviewList = this.reviewList;
        this.size = reviews.length;
        this.getUniversitiesList();
        this.getCountryList();
        this.reviewsLoaded = Promise.resolve(true);
        this.reviewListPaginated = [];
        this.reviewListPaginated.push(...this.reviewList.slice(0, this.pageSize));
        this.pageEvent.pageIndex = 0;
        this.pageEvent.pageSize = this.pageSize;
        this.pageEvent.length = 0;
        this.pageEvent.previousPageIndex = 0;
        const id = this.route.snapshot.paramMap.get('univId');
        if (id != null) {
          const univ = this.univService.getByIdAsync(id);
          univ.then(() => {
            this.filters[0] = this.univService.universityViewed$.getValue().name;
            this.onChangeFilter();
          }).catch((error) => {
            console.log(error);
          });
        }
      });
    }).catch((error) => {
      console.log(error);
    });

  }

  ngOnInit() {

  }

  getUniversitiesList() {
    let i;
    this.universityList = [];
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
    this.pageChanged(this.pageEvent);
  }

  navigateReviewsDetails(review: Review) {
    this.router.navigate([`/reviews/${review.id}`]);
  }


  resetResearchList() {
    this.filters = [null, null, null];
    this.reviewList = this.initialReviewList;
    this.getUniversitiesList();
    this.getCountryList();
    this.pageChanged(this.pageEvent);
  }

  pageChanged($event: PageEvent) {
    this.pageEvent = $event;
    this.reviewListPaginated = [];
    $event.pageIndex = ($event.pageIndex * $event.pageSize) + 1 > this.reviewList.length ?
      Math.floor(this.reviewList.length / $event.pageSize) : $event.pageIndex;
    this.reviewListPaginated.push(...this.reviewList.slice($event.pageIndex * $event.pageSize,
      $event.pageSize > this.reviewList.length ? this.reviewList.length : ($event.pageIndex + 1) * $event.pageSize));
  }
}
