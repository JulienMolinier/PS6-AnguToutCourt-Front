import {Component, OnInit} from '@angular/core';
import {University} from '../../../models/university';
import {UniversityService} from '../../../services/universityService';

@Component({
  selector: 'app-research-result-list',
  templateUrl: './research-result-list.component.html',
  styleUrls: ['./research-result-list.component.scss']
})
export class ResearchResultListComponent implements OnInit {

  public researchResultList: University[] = [];

  constructor(public universityService: UniversityService) {
    this.universityService.researchUniversities$.subscribe(value => this.researchResultList = value);
  }

  ngOnInit(): void {
  }

}
