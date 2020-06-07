import { SideNavContentSizing, Nav } from './../shared/models/nav';
import { Component, OnInit } from '@angular/core';
import { SideNavMode } from '../shared/models';

@Component({
  selector: 'app-authors-portal',
  templateUrl: 'authors-portal.component.html',
  styleUrls: ['authors-portal.component.scss']
})
export class AuthorsPortalComponent implements OnInit {
  sideNavMode = SideNavMode.Side;
  navContentSize = SideNavContentSizing.Fill;
  nav: Nav = {
    iconUrl: 'assets/avatar.png',
    items: [
      { name: 'Dashboard', path: null },
      { name: 'Articles', path: ['/authors/articles'] },
      { name: 'Self Help', path: null },
      { name: 'About', path: null },
    ],
  };

  constructor() { }

  ngOnInit() { }
}
