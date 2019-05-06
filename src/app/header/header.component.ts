import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from 'src/services/loginService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private Firstname: string;
  private Lastname: string;

  constructor(private router: Router, private loginService: LoginService) {
    this.Firstname = loginService.user.firstName;
    this.Lastname = loginService.user.lastName;
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
