import { Component, OnInit } from '@angular/core';
import { Nav, SideNavMode } from '../authors-portal/models';

@Component({
  templateUrl: './articles.component.html',
  styleUrls: [ './articles.component.scss' ],
})
export class ArticlesComponent implements OnInit {
  sideNavMode: SideNavMode = SideNavMode.Side;

  nav: Nav = {
    iconUrl: 'assets/avatar.jpg',
    items: [
      { name: 'All', path: null },
      { name: 'Tech', path: null },
      { name: 'Poetry', path: null },
      { name: 'Self Help', path: null },
      { name: 'About', path: null },
    ],
  };


  constructor() { }

  ngOnInit() { }
}
