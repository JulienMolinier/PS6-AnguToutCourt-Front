import {Component, OnInit} from '@angular/core';
import {UniversityService} from '../../../services/universityService';
import {ActivatedRoute} from '@angular/router';
import {University} from '../../../models/university';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss']
})
export class UniversityComponent implements OnInit {

  id: number;

  public university: University;

  constructor(public universityService: UniversityService, private route: ActivatedRoute) {
    console.log('bonjour');
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => this.universityService.getById(params.get('id')));
    // this.id = this.route.snapshot.params.id;
    // console.log(this.id);
    // this.university = this.universityService.getById(this.id);
  }

}
