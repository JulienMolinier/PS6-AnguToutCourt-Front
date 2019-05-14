import {Component, OnInit} from '@angular/core';
import {University} from '../../../models/university';
import {UniversityService} from '../../../services/universityService';
import {ActivatedRoute, Router} from '@angular/router';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-research-result-list',
  templateUrl: './research-result-list.component.html',
  styleUrls: ['./research-result-list.component.scss']
})
export class ResearchResultListComponent implements OnInit {


  pageSize = 5;
  recommended: string;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  private researchResultList: University[];
  private countryList: string[];
  private exchangeProgList: string[];
  private semesterList: number[];
  private check: string;
  private filters: [number[], string[], string[], string[], string[]];
  private specialityList: string[];
  private researchResultListPaginated: University[];
  private pageEvent: PageEvent;

  constructor(public universityService: UniversityService, private router: Router, private route: ActivatedRoute) {
    this.pageEvent = new PageEvent();
    this.filters = [null, null, null, null, null];
    this.researchResultList = [];
    this.researchResultListPaginated = [];
    this.semesterList = [];
    this.exchangeProgList = [];
    this.countryList = [];

    const promise = this.universityService.getUniversitiesAsync();
    promise.then(value => {
      this.getUniversitiesList();
      this.setupFiltersLists();
      this.researchResultListPaginated = [];
      this.researchResultListPaginated.push(...this.researchResultList.slice(0, this.pageSize));
    }).catch((error) => {
      console.log(error);
    });
  }

  static isDistinct(value, index, self) {
    return self.indexOf(value) === index;
  }

  ngOnInit(): void {
    this.pageEvent.pageIndex = 0;
    this.pageEvent.pageSize = this.pageSize;
    this.pageEvent.length = 0;
    this.pageEvent.previousPageIndex = 0;
    this.recommended = this.route.snapshot.paramMap.get('bool');
    this.onFilterBestChange();
  }

  setupFiltersLists() {
    const tmp = [];
    const tmp2 = [];
    this.countryList = this.researchResultList.map(univ => univ.country).filter(ResearchResultListComponent.isDistinct);
    this.exchangeProgList = this.researchResultList.map(univ => univ.program).filter(ResearchResultListComponent.isDistinct);
    this.researchResultList.map(univ => {
      for (const m of univ.major) {
        tmp.push(m);
      }
      for (const s of univ.semester) {
        tmp2.push(s);
      }
    });
    this.semesterList = tmp2.filter(ResearchResultListComponent.isDistinct);
    this.specialityList = tmp.filter(ResearchResultListComponent.isDistinct);
  }

  onFilterRateChange() {
    this.researchResultList.sort((a, b) => a.rate > b.rate ? -1 : 1);
    this.pageChanged(this.pageEvent);
  }

  onFilterPlaceChange() {
    this.researchResultList.sort((a, b) => a.placesNumber > b.placesNumber ? -1 : 1);
    this.pageChanged(this.pageEvent);
  }

  onFilterOldChange() {
    this.researchResultList.sort((a, b) => a.nbOldExp > b.nbOldExp ? -1 : 1);
    this.pageChanged(this.pageEvent);
  }

  onFilterBestChange() {
    if (this.recommended) {
      const promise = this.universityService.getBestUniversitiesAsync();
      promise.then(value => {
        this.getUniversitiesList();
        this.pageChanged(this.pageEvent);
      }).catch((error) => {
        console.log(error);
      });
    } else {
      const promise = this.universityService.getUniversitiesAsync();
      promise.then(value => {
        this.getUniversitiesList();
        this.pageChanged(this.pageEvent);
      }).catch((error) => {
        console.log(error);
      });
    }
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
    this.pageChanged(this.pageEvent);

  }

  resetResearchList() {
    this.check = '';
    this.recommended = '';
    this.onFilterBestChange();
    this.filters = [null, null, null, null, null];
    this.getUniversitiesList();
    this.setupFiltersLists();
    this.pageChanged(this.pageEvent);
  }

  pageChanged($event: PageEvent) {
    this.pageEvent = $event;
    this.researchResultListPaginated = [];
    console.log(($event.pageIndex * $event.pageSize) + 1 + ' + ' + this.researchResultList.length + ' + ' +
      Math.floor(this.researchResultList.length / $event.pageSize));
    $event.pageIndex = ($event.pageIndex * $event.pageSize) + 1 > this.researchResultList.length ? 0
      : $event.pageIndex; // Math.floor(this.researchResultList.length / $event.pageSize)
    this.researchResultListPaginated.push(...this.researchResultList.slice($event.pageIndex * this.pageSize,
      $event.pageSize > this.researchResultList.length ? this.researchResultList.length : ($event.pageIndex + 1) * this.pageSize));
  }
}
