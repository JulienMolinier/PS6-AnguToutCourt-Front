import {Component, Input, OnInit} from '@angular/core';
import {Menu} from '../../models/menu';
import {LastOpinions} from '../../models/lastOpinions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input()
  menu: Menu;
  lastOPinions: LastOpinions;

  constructor() {
  }

  ngOnInit() {
  }

}
