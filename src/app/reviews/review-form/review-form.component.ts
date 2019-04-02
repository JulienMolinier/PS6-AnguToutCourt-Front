import {Component, OnInit} from '@angular/core';
import {Major, Review} from '../../../models/review';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReviewService} from '../../../services/reviewService';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {

  public reviewForm: FormGroup;
  public MajorList: string[] = Object.keys(Major).map(m => Major[m]);

  constructor(private formBuilder: FormBuilder, private reviewService: ReviewService) {
    this.reviewForm = this.formBuilder.group({
      City: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      Major: ['', [Validators.required]],
      Country: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  addReview() {
    if (this.reviewForm.valid) {
      const reviewToCreate: Review = this.reviewForm.getRawValue() as Review;
      this.reviewService.postReview(reviewToCreate);
    } else {
    }
  }
}
