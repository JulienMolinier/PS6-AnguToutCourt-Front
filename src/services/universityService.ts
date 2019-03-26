import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/index';
import {University} from '../models/university';
import {UNIVERSITIES_MOCKED} from '../mocks/universityMocks';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  private universityList: University[] = UNIVERSITIES_MOCKED;
  private researchResultList: University[] = UNIVERSITIES_MOCKED;

  public universities$: BehaviorSubject<University[]> = new BehaviorSubject(this.universityList);
  public researchUniversities$: BehaviorSubject<University[]> = new BehaviorSubject(this.researchResultList);

  constructor() {
  }

  getById(id: number) {
    const university = this.universityList.find(
      (s) => {
        return s.id === id;
      }
    );
    return university;
  }
}
