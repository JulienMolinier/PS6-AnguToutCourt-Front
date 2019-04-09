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

  goReviews() {
    this.router.navigate(['reviews']);
  }

  goUniversities() {
    this.router.navigate(['university']);
  }

  goExchange() {
    this.router.navigate(['exchange-programs']);
  }

}
