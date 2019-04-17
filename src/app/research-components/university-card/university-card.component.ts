import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {University} from '../../../models/university';

@Component({
  selector: 'app-university-card',
  templateUrl: './university-card.component.html',
  styleUrls: ['./university-card.component.scss']
})
export class UniversityCardComponent implements OnInit {

  @Input()
  university: University;

  @Output()
  showUniversityDetails: EventEmitter<University> = new EventEmitter<University>();

  constructor() {
  }

  ngOnInit() {
  }

  universityDetails() {
    this.showUniversityDetails.emit(this.university);
  }
}
