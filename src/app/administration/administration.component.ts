import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goRegister() {
    this.router.navigate(['register']);
  }

  goUniversityForm() {
    this.router.navigate(['university-form']);
  }

  makeTop5() {
    const bool = true;
    this.router.navigate(['research', {bool}]);
  }
}
