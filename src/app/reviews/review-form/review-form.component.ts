import { Component, OnInit } from '@angular/core';
import {Formations, Review} from '../../../models/review';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {

  public reviewForm: FormGroup;
  public FormationList: string[] = Object.keys(Formations).map(m => Formations[m]);

  constructor() { }

  ngOnInit() {
  }
  addReview(){


    const reviewToCreate: Review = this.reviewForm.getRawValue() as Review;


  }



}
