import {Component, Input, OnInit} from '@angular/core';
import {University} from '../../../models/university';

@Component({
  selector: 'app-university-description',
  templateUrl: './university-description.component.html',
  styleUrls: ['./university-description.component.scss']
})
export class UniversityDescriptionComponent implements OnInit {

  @Input()
  university: University;

  constructor() {
  }

  ngOnInit() {
  }

}
