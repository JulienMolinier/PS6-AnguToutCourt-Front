import {Component, OnInit} from '@angular/core';
import {University} from '../../../models/university';
import {UniversityService} from '../../../services/universityService';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
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
  private rateCheckbox: BehaviorSubject<boolean>;
  private placeCheckbox: BehaviorSubject<boolean>;
  private oldCheckbox: BehaviorSubject<boolean>;
  private countryFilter: string;
  private exchangeFilter: string;
  private semesterFilter: string;

  constructor(public universityService: UniversityService, private router: Router) {
    this.researchResultList = [];
    this.countryList = COUNTRY_MOCKED;
    this.exchangeProgList = EXCHANGE_MOCKED;
    this.semesterList = ['S1', 'S2', 'S1 et S2'];
    this.rateCheckbox = new BehaviorSubject<boolean>(false);
    this.placeCheckbox = new BehaviorSubject<boolean>(false);
    this.oldCheckbox = new BehaviorSubject<boolean>(false);
    universityService.getUniversities();
    this.getUniversitiesList();
  }

  ngOnInit(): void {
  }


  onFilterRateChange() {
    this.rateCheckbox.next(!this.rateCheckbox.getValue());
    if (this.rateCheckbox.getValue()) {
      this.researchResultList.sort((a, b) => a.rate > b.rate ? -1 : 1);
    } else {
      this.researchResultList.sort((a, b) => a.rate > b.rate ? 1 : -1);
    }
  }

  onFilterPlaceChange() {
    this.placeCheckbox.next(!this.placeCheckbox.getValue());
    if (this.placeCheckbox.getValue()) {
      this.researchResultList.sort((a, b) => a.placesNumber > b.placesNumber ? -1 : 1);
    } else {
      this.researchResultList.sort((a, b) => a.placesNumber > b.placesNumber ? 1 : -1);
    }
  }

  onFilterOldChange() {
    this.oldCheckbox.next(!this.oldCheckbox.getValue());
    if (this.oldCheckbox.getValue()) {
      this.researchResultList.sort((a, b) => a.nbOldExp > b.nbOldExp ? -1 : 1);
    } else {
      this.researchResultList.sort((a, b) => a.nbOldExp > b.nbOldExp ? 1 : -1);
    }
  }

  navigateUniversityDetails(university: University) {
    this.router.navigate([`/university/${university.id}`]);
  }

  getUniversitiesList() {
    this.universityService.universities$.subscribe((value) => this.researchResultList = value);
  }

  onCountryFilterChange() {
    if (this.countryFilter) {
      this.getUniversitiesList();
      this.researchResultList = this.researchResultList.filter(value => value.country === this.countryFilter);
    } else {
      this.getUniversitiesList();
    }
  }

  onExchangeFilterChange() {
    if (this.exchangeFilter) {
      this.getUniversitiesList();
      this.researchResultList = this.researchResultList.filter(value =>
        value.program.toLowerCase() === this.exchangeFilter.toLowerCase());
    } else {
      this.getUniversitiesList();
    }
  }

  onSemesterFilterChange() {
    if (this.semesterFilter === 'S1') {
      this.getUniversitiesList();
      this.researchResultList = this.researchResultList.filter(value =>
        value.semester.includes(1));
    } else if (this.semesterFilter === 'S2') {
      this.getUniversitiesList();
      this.researchResultList = this.researchResultList.filter(value =>
        value.semester.includes(2));
    } else if (this.semesterFilter === 'S1 et S2') {
      this.getUniversitiesList();
      this.researchResultList = this.researchResultList.filter(value =>
        value.semester.includes(1) && value.semester.includes(2));
    } else {
      this.getUniversitiesList();
    }
  }

  resetResearchList() {
    this.getUniversitiesList();
    this.rateCheckbox = new BehaviorSubject<boolean>(false);
    this.placeCheckbox = new BehaviorSubject<boolean>(false);
    this.oldCheckbox = new BehaviorSubject<boolean>(false);
    this.countryFilter = null;
    this.semesterFilter = null;
    this.exchangeFilter = null;
  }
}
