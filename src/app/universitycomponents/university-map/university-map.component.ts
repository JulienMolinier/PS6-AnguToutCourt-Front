import {Component, Input, OnInit} from '@angular/core';
import {University} from '../../../models/university';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-university-map',
  templateUrl: './university-map.component.html',
  styleUrls: ['./university-map.component.scss']
})
export class UniversityMapComponent implements OnInit {

  @Input()
  university: University;

  locationToDisplay: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    const urlToSanitize = this.university.location;
    this.locationToDisplay =
      this.sanitizer.bypassSecurityTrustResourceUrl(urlToSanitize);
  }

}
