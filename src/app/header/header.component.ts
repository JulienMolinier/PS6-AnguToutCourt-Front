import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from 'src/services/loginService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) {
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

  isAdmin() {
    return this.loginService.user$.getValue().isAdmin;
  }

  goHomeAdmin() {
    this.router.navigate(['administration']);
  }
}
