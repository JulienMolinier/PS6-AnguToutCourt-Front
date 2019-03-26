import {Component, OnInit} from '@angular/core';
import {Major, Review} from '../../../models/review';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {

  public reviewForm: FormGroup;
  public MajorList: string[] = Object.keys(Major).map(m => Major[m]);

  constructor() {
  }

  ngOnInit() {
  }

  addReview() {


    const reviewToCreate: Review = this.reviewForm.getRawValue() as Review;


  }


}
