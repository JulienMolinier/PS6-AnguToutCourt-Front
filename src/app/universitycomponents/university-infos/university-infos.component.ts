import {Component, Input, OnInit} from '@angular/core';
import {University} from '../../../models/university';
import {Router} from '@angular/router';

@Component({
  selector: 'app-university-infos',
  templateUrl: './university-infos.component.html',
  styleUrls: ['./university-infos.component.scss']
})
export class UniversityInfosComponent implements OnInit {

  @Input()
  university: University;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goReviews() {
    const univId = this.university.id;
    this.router.navigate(['reviews', {univId}]);
  }
}
