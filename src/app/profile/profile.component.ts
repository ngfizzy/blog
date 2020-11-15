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
    { name: 'Bio', path: '/profile', size: {
      md: 1,
      lg: 2,
    },
  },
    { name: 'Work Experience', path: '/profile/work-experience',
    size: {
      md: 3,
      lg: 3
    }
  },
    { name: 'Articles', path: '/articles', size: {
      md: 3,
      lg: 3
    }},
    { name: 'Art Gallery', path: '/poetry', size: {
      md: 3,
      lg: 2
    }},
    { name: 'Login', path: '/authors/login', size: {
      md: 2,
      lg: 2
    }},
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

  toggleNavBarOnNav() {
    this.isNavOpen = this.isNavOpen && this.isMobile ?  false : true;
  }
}
