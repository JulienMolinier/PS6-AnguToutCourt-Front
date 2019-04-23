import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {University} from '../../../models/university';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {UniversityService} from '../../../services/universityService';

@Component({
  selector: 'app-university-map',
  templateUrl: './university-map.component.html',
  styleUrls: ['./university-map.component.scss']
})
export class UniversityMapComponent implements OnInit, OnChanges {

  @Input()
  university: University;

  locationToDisplay: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private universityService: UniversityService) {
    this.locationToDisplay = null;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.university) {
      const variableChange = changes.university;
      const urlToSanitize = this.university.location;
      this.locationToDisplay =
        this.sanitizer.bypassSecurityTrustResourceUrl(urlToSanitize);
    }
  }

}
