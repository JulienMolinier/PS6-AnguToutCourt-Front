import {Component, OnInit} from '@angular/core';
import {Review} from '../../../models/review';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReviewService} from '../../../services/reviewService';
import {UniversityService} from '../../../services/universityService';
import {University} from '../../../models/university';
import {MatDialog} from '@angular/material';
import {ReviewPostAlertComponent} from '../../alerte/review-post-alert';
import {Router} from '@angular/router';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {

  public reviewForm: FormGroup;
  public universities: University[];

  constructor(private formBuilder: FormBuilder,
              private reviewService: ReviewService,
              private universityService: UniversityService,
              public dialog: MatDialog,
              private router: Router) {

    this.universityService.getUniversities();
    this.universityService.universities$.subscribe((value) => this.universities = value);

    this.reviewForm = this.formBuilder.group({
      universityId: ['', [Validators.required]],
      Rate: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ReviewPostAlertComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['home']);
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }

  addReview() {
    const dateToday: Date = new Date();
    if (this.reviewForm.valid) {
      const reviewToCreate: Review = this.reviewForm.getRawValue() as Review;
      reviewToCreate.Date = dateToday;
      reviewToCreate.verified = false;
      this.reviewService.postReview(reviewToCreate);
      this.universityService.addARate(reviewToCreate.universityId.toString(), reviewToCreate.Rate);
      this.openDialog();
    }
  }
}
