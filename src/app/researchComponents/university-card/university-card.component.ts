import {Component, Input, OnInit} from '@angular/core';
import {University} from "../../../models/university";

@Component({
  selector: 'app-university-card',
  templateUrl: './university-card.component.html',
  styleUrls: ['./university-card.component.scss']
})
export class UniversityCardComponent implements OnInit {

  @Input()
  university: University;

  constructor() {
  }

  ngOnInit() {
  }

}
