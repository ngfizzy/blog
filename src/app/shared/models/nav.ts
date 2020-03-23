import { RouterLink, RouterLinkWithHref } from '@angular/router';

export interface NavItem {
  name: string;
  path: string[];
}

export interface Nav {
  iconUrl: string;
  items: NavItem[];
}

export const enum SideNavMode  {
  Push = 'push',
  Over = 'over',
  Side = 'side',
}

export enum SideNavContentSizing {
  Fill = 'Fill',
  ThreeFourths = 'ThreeFourths'
}
