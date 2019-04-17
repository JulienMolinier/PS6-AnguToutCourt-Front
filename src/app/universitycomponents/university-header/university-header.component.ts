import {Component, Input, OnInit} from '@angular/core';
import {University} from '../../../models/university';

@Component({
  selector: 'app-university-header',
  templateUrl: './university-header.component.html',
  styleUrls: ['./university-header.component.scss']
})
export class UniversityHeaderComponent implements OnInit {

  @Input()
  university: University;

  constructor() { }

  ngOnInit() {
  }

}
