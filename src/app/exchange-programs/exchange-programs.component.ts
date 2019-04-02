import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-exchange-programs',
  templateUrl: './exchange-programs.component.html',
  styleUrls: ['./exchange-programs.component.scss']
})
export class ExchangeProgramsComponent implements OnInit {

  constructor(private router: Router) {
  }

  goHome() {
    this.router.navigate(['home']);
  }

  ngOnInit() {
  }

}
