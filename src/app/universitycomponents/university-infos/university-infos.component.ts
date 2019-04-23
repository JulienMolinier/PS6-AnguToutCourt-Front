import {Component, Input, OnInit} from '@angular/core';
import {University} from '../../../models/university';

@Component({
  selector: 'app-university-infos',
  templateUrl: './university-infos.component.html',
  styleUrls: ['./university-infos.component.scss']
})
export class UniversityInfosComponent implements OnInit {

  @Input()
  university: University;

  constructor() {
  }

  ngOnInit() {
  }

}
