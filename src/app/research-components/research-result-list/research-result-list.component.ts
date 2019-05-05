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

  private researchResultList: University[];
  private countryList: string[];
  private exchangeProgList: string[];
  private semesterList: number[];
  private check: string;
  private filters: [number[], string[], string[], string[], string[]];
  private specialityList: string[];
  recommended: string;

  constructor(public universityService: UniversityService, private router: Router) {
    this.filters = [null, null, null, null, null];
    this.researchResultList = [];
    this.semesterList = [];
    this.exchangeProgList = [];
    this.countryList = [];

    const promise = this.universityService.getUniversitiesAsync();
    promise.then(value => {
      this.getUniversitiesList();
      this.setupFiltersLists();
    }).catch((error) => {
      console.log(error);
    });
  }

  ngOnInit(): void {
  }

  isDistinct(value, index, self) {
    return self.indexOf(value) === index;
  }

  setupFiltersLists() {
    const tmp = [];
    const tmp2 = [];
    this.countryList = this.researchResultList.map(univ => univ.country).filter(this.isDistinct);
    this.exchangeProgList = this.researchResultList.map(univ => univ.program).filter(this.isDistinct);
    this.researchResultList.map(univ => {
      for (const m of univ.major) {
        tmp.push(m);
      }
      for (const s of univ.semester) {
        tmp2.push(s);
      }
    });
    this.semesterList = tmp2.filter(this.isDistinct);
    this.specialityList = tmp.filter(this.isDistinct);
  }

  onFilterRateChange() {
    this.researchResultList.sort((a, b) => a.rate > b.rate ? -1 : 1);
  }

  onFilterPlaceChange() {
    this.researchResultList.sort((a, b) => a.placesNumber > b.placesNumber ? -1 : 1);
  }

  onFilterOldChange() {
    this.researchResultList.sort((a, b) => a.nbOldExp > b.nbOldExp ? -1 : 1);
  }

  onFilterBestChange() {
    if (this.recommended) {
      this.universityService.getBestUniversities();
      this.getUniversitiesList();
    } else {
      this.universityService.getUniversities();
      this.getUniversitiesList();
    }
    console.log(this.recommended);
  }

  navigateUniversityDetails(university: University) {
    this.router.navigate([`/university/${university.id}`]);
  }

  getUniversitiesList() {
    this.universityService.universities$.subscribe((value) => this.researchResultList = value);
  }

  onChangeFilter() {
    this.getUniversitiesList();
    const self = this;
    for (let i = 0; i <= this.filters.length; i++) {
      if (i === 0 && this.filters[0] !== null && this.filters[0].length !== 0) {
        this.researchResultList = this.researchResultList.filter(item => {
          let res = true;
          for (const value of self.filters[0]) {
            if (!item.semester.includes(value)) {
              res = false;
            }
          }
          return res;
        });
      } else if (i === 1 && this.filters[1] !== null && this.filters[1].length !== 0) {
        this.researchResultList = this.researchResultList.filter(
          item => self.filters[1].includes(item.program));
      } else if (i === 2 && this.filters[2] !== null && this.filters[2].length !== 0) {
        this.researchResultList = this.researchResultList.filter(
          item => self.filters[2].includes(item.country));
      } else if (i === 3 && this.filters[3] != null && this.filters[3].length !== 0) {
        this.researchResultList = this.researchResultList.filter(
          item => self.filters[3].includes(item.name));
      } else if (i === 4 && this.filters[4] !== null && this.filters[4].length !== 0) {
        this.researchResultList = this.researchResultList.filter(item => {
          let res = true;
          for (const value of self.filters[4]) {
            if (!item.major.includes(value)) {
              res = false;
            }
          }
          return res;
        });
      }
    }
    this.setupFiltersLists();
  }

  resetResearchList() {
    this.check = '';
    this.recommended = '';
    this.onFilterBestChange();
    this.filters = [null, null, null, null, null];
    this.getUniversitiesList();
    this.setupFiltersLists();
  }
}
