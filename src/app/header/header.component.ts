import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['home']);
  }

  goResearch() {
    this.router.navigate(['research']);
  }

  goReviewsResearch() {
    this.router.navigate(['reviews']);
  }

  goExchange() {
    this.router.navigate(['exchange-programs']);
  }

  goReviews() {
    this.router.navigate(['reviewsAll']);
  }

}
