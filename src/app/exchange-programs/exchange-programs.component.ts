import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-exchange-programs',
  templateUrl: './exchange-programs.component.html',
  styleUrls: ['./exchange-programs.component.scss']
})
export class ExchangeProgramsComponent implements OnInit {
  @Input()
  exchange: ExchangeProgramsComponent;

  constructor(private router: Router) {
  }

  goHome() {
    this.router.navigate(['home']);
  }

  ngOnInit() {
  }

}
