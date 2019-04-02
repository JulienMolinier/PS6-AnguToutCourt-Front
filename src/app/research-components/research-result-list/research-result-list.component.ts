import {Component, OnInit} from '@angular/core';
import {University} from '../../../models/university';
import {UniversityService} from '../../../services/universityService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-research-result-list',
  templateUrl: './research-result-list.component.html',
  styleUrls: ['./research-result-list.component.scss']
})
export class ResearchResultListComponent implements OnInit {

  public researchResultList: University[] = [];

  constructor(public universityService: UniversityService, private router: Router) {
    universityService.getUniversities();
    this.universityService.universities$.subscribe((value) => this.researchResultList = value);
  }

  ngOnInit(): void {
  }

  navigateUniversityDetails(university: University) {
    this.router.navigate([`/university/${university.id}`]);
  }
}
