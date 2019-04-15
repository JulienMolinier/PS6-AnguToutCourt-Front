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

  private researchResultList: University[] = [];
  private countryList: Country[] = COUNTRY_MOCKED;
  private exchangeProgList: string[] = EXCHANGE_MOCKED;
  private rateCheckbox: BehaviorSubject<boolean>;
  private placeCheckbox: BehaviorSubject<boolean>;
  private countryFilter: string;
  private exchangeFilter: string;

  constructor(public universityService: UniversityService, private router: Router) {
    this.rateCheckbox = new BehaviorSubject<boolean>(false);
    this.placeCheckbox = new BehaviorSubject<boolean>(false);
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
}
