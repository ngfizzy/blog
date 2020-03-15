import { Component, OnInit } from '@angular/core';
import { Nav, SideNavContentSizing } from '../authors-portal/models';

@Component({
  templateUrl: './poetry.component.html'
})
export class PoetryComponent implements OnInit {
  isSideNavOpen = false;
  sideNavContentSizing = SideNavContentSizing.Fill;
  nav: Nav = {
    iconUrl: 'assets/poetry.jpeg',
    items: [
     { name: 'Shakespeare', path: null }
    ]
  };

  constructor() { }

  ngOnInit() { }

  toggleSideNav(isOpen: boolean) {
    this.isSideNavOpen = isOpen;
  }
}
