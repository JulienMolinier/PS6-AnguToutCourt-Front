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
  private countryList: Country[];
  private exchangeProgList: string[];
  private semesterList: string[];
  private check: string;
  private filters: [string, string, string];
  recommended: string;

  constructor(public universityService: UniversityService, private router: Router) {
    this.researchResultList = [];
    this.filters = [null, null, null];
    this.countryList = COUNTRY_MOCKED;
    this.exchangeProgList = EXCHANGE_MOCKED;
    this.semesterList = ['1', '2', '1 et 2'];
    universityService.getUniversities();
    this.getUniversitiesList();
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
    for (let i = 0; i <= this.filters.length; i++) {
      if (i === 0 && (this.filters[i] === '1' || this.filters[i] === '2')) {
        this.researchResultList = this.researchResultList.filter(value =>
          value.semester.includes(Number(this.filters[i])));
      } else if (i === 0 && this.filters[i] === '1 et 2') {
        this.researchResultList = this.researchResultList.filter(value =>
          value.semester.includes(1) && value.semester.includes(2));
      } else if (i === 1 && this.filters[i] !== null) {
        this.researchResultList = this.researchResultList.filter(value =>
          value.program.toLowerCase() === this.filters[i].toLowerCase());
      } else if (i === 2 && this.filters[i] !== null) {
        this.researchResultList = this.researchResultList.filter(value => value.country === this.filters[i]);
      }
    }
  }

  resetResearchList() {
    this.check = '';
    this.recommended = '';
    this.onFilterBestChange();
    this.filters = [null, null, null];
    this.getUniversitiesList();
  }
}
