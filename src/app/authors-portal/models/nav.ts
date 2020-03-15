import { RouterLink } from '@angular/router';

export interface NavItem {
  name: string;
  path: RouterLink;
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

export const enum SideNavContentSizing {
  Fill = 'Fill',
  ThreeFourths = 'ThreeFourths'
}
