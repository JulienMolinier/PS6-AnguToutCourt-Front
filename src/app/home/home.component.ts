import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goReviewForm() {
    this.router.navigate(['review-form']);
  }

  goLastReviewList() {
    this.router.navigate(['last-reviews']);
  }

  goTop5() {
    const bool = true;
    this.router.navigate(['research', {bool}]);
  }
}
