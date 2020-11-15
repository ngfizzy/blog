import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  private readonly mobileInnerWidth = 768;

  isMobile: boolean;
  expandedNav = false;
  isNavOpen = false;


  links = [
    { name: 'Bio', path: '/profile'},
    { name: 'Work Experience', path: '/profile/work-experience'},
    { name: 'Articles', path: '/articles'},
    { name: 'Art Gallery', path: '/poetry'},
    { name: 'Login', path: '/authors/login'},
  ];

  constructor() {
  }

  ngOnInit() {
    this.setIsMobile();
  }

  setIsMobile() {
    this.isMobile = window.innerWidth < this.mobileInnerWidth;
  }

  toggleNavBar() {
    this.isNavOpen = !this.isNavOpen;
  }
}
