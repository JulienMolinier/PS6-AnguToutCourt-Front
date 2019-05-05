import {Component, OnInit} from '@angular/core';
import {University} from '../../../models/university';
import {UniversityService} from '../../../services/universityService';
import {Router} from '@angular/router';
import {COUNTRY_MOCKED} from '../../../mocks/country.mocks';
import {Country} from '../../../models/country';
import {EXCHANGE_MOCKED} from '../../../mocks/exchange.mocks';

@Component({
  selector: 'app-research-result-list',
  templateUrl: './research-result-list.component.html',
  styleUrls: ['./research-result-list.component.scss']
})
export class ResearchResultListComponent implements OnInit {

  private researchResultList: University[];
  private universityList: University[];
  private countryList: Country[];
  private exchangeProgList: string[];
  private semesterList: number[];
  private check: string;
  private filters: [number[], string[], string[], string[], string[]];
  private specialityList: string[];
  recommended: string;

  constructor(public universityService: UniversityService, private router: Router) {
    this.researchResultList = [];
    this.filters = [null, null, null, null, null];
    this.countryList = COUNTRY_MOCKED;
    this.exchangeProgList = EXCHANGE_MOCKED;
    this.semesterList = [1, 2];
    universityService.getUniversities();
    this.getUniversitiesList();
    const promise = this.universityService.getUniversitiesAsync();
    promise.then(value => {
      this.universityList = this.universityService.universities$.getValue();
    }).catch((error) => {
      console.log(error);
    });
    this.specialityList = ['SI', 'MAM', 'GB'];
  }

  ngOnInit(): void {
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
  }

  resetResearchList() {
    this.check = '';
    this.recommended = '';
    this.onFilterBestChange();
    this.filters = [null, null, null, null, null];
    this.getUniversitiesList();
  }
}
