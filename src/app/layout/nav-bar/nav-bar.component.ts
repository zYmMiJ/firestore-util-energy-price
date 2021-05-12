import { Component, OnInit } from '@angular/core';
import { LAYOUT } from './menu';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  menu = LAYOUT.menu;
  
  constructor() { 
    console.log(LAYOUT);
  }

  ngOnInit(): void {
  }

}
