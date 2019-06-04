import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {University} from '../../../models/university';
import {UniversityService} from '../../../services/universityService';
import {EXCHANGE_MOCKED} from '../../../mocks/exchange.mocks';
import {MatDialog} from '@angular/material';
import {MyDialogComponent} from '../../alerte/my-dialog';
import {AlertFormUniversityComponent} from '../../alerte/alert-form-university';

@Component({
  selector: 'app-university-form',
  templateUrl: './university-form.component.html',
  styleUrls: ['./university-form.component.scss']
})
export class UniversityFormComponent implements OnInit {

  private universityForm: FormGroup;
  private semesterList: number[];
  private exchangeProgList: string[];
  private campusImgsPath: string[];
  private majorList: string[];

  private contactsRaw: string;
  private campusImgsRaw: string;

  constructor(private formBuilder: FormBuilder,
              private universityService: UniversityService,
              public dialog: MatDialog) {



    this.semesterList = [1, 2];
    this.campusImgsPath = [];
    this.majorList = ['GE', 'GB', 'SI', 'BAT', 'MAM'];
    this.exchangeProgList = EXCHANGE_MOCKED;
    this.contactsRaw = '';
    this.campusImgsRaw = '';

    this.universityForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      imgPath: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      program: ['', [Validators.required]],
      placesNumber: ['', [Validators.required]],
      description: ['', [Validators.required]],
      nbOldExp: ['', [Validators.required]],
      semester: [[], [Validators.required]],
      campusDesc: ['', [Validators.required]],
      location: ['', [Validators.required]],
      inscriptiondesc: ['', [Validators.required]],
      major: [[], [Validators.required]],
      link: ['', [Validators.required]],
    });

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AlertFormUniversityComponent,{
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
  }

  addUniversity() {
    if (this.universityForm.valid) {
      const university: University = this.universityForm.getRawValue() as University;
      university.nbReviews = 0;
      university.rate = 0;
      university.rates = [];
      university.recommended = false;
      university.campusImgs = this.campusImgsRaw.split('\n');
      university.contacts = this.contactsRaw.split('\n');
      this.universityService.postUniversity(university);
    } else {
      this.openDialog();
    }
  }

  contactChange(newValue) {
    this.contactsRaw = newValue;
  }

  campusImgChange(newValue) {
    this.campusImgsRaw = newValue;
  }
}
