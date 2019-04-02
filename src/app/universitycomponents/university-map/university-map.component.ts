import {Component, Input, OnInit} from '@angular/core';
import {University} from "../../../models/university";

@Component({
  selector: 'app-university-map',
  templateUrl: './university-map.component.html',
  styleUrls: ['./university-map.component.scss']
})
export class UniversityMapComponent implements OnInit {

  @Input()
  university: University;

  constructor() {
  }

  ngOnInit() {
  }

}
