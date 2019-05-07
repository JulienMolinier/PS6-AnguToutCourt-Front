import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {University} from '../../../models/university';
import {UniversityService} from '../../../services/universityService';
import {EXCHANGE_MOCKED} from '../../../mocks/exchange.mocks';

@Component({
  selector: 'app-university-form',
  templateUrl: './university-form.component.html',
  styleUrls: ['./university-form.component.scss']
})
export class UniversityFormComponent implements OnInit {

  private universityForm: FormGroup;
  private semesterList: string[];
  private exchangeProgList: string[];
  private campusImgsPath: string[];

  constructor(private formBuilder: FormBuilder,
              private universityService: UniversityService) {

    this.semesterList = ['1', '2'];
    this.campusImgsPath = [];
    this.exchangeProgList = EXCHANGE_MOCKED;
    this.universityForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      img: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      program: ['', [Validators.required]],
      placesNumber: ['', [Validators.required]],
      description: ['', [Validators.required]],
      nbOldExp: ['', [Validators.required]],
      semester: ['', [Validators.required]],
      campusDesc: ['', [Validators.required]],
      campusImgs: ['', [Validators.required]],
      location: ['', [Validators.required]],
      inscriptionDesc: ['', [Validators.required]],
      contacts: ['', [Validators.required]],
      major: ['', [Validators.required]],
      link: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  addCustom = (term) => ({id: term, name: term});

  addUniversity() {
    if (this.universityForm.valid) {
      const university: University = this.universityForm.getRawValue() as University;
      university.nbReviews = 0;
      university.rate = 0;
      university.rates = [];
      this.universityService.postUniversity(university);
    } else {
    }
  }

}
