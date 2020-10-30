import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Nav, SideNavContentSizing, SideNavMode } from '../../models';

@Component({
  selector: 'app-side-nav',
  template: `
  <mat-sidenav-container class="bg-sidenav-container sidenav-container">
    <mat-sidenav class="bg-sidenav position-fixed " ngClass="{ collapsed: !isOpen }" #sidenav [mode]="mode" [opened]="isOpen">
      <nav class="main-nav">

        <div class="p-2 border-bottom m-auto avatar w-100">
          <a [routerLink]="['./']" class="">
            <img [src]="nav?.iconUrl" alt="author avatar" width="232">
          </a>
        </div>

        <mat-nav-list  class="color-main">
          <ng-container *ngFor="let item of nav?.items">
            <a (click)="goToLocation(item.path, item.queries);">
              <mat-list-item class="text-capitalize border-bottom">{{ item.name }}</mat-list-item>
            </a>
          </ng-container>
        </mat-nav-list>
      </nav>
    </mat-sidenav>

      <!-- Remove margin top is a quick hack to make few pages stick to the top-->
    <mat-sidenav-content
      [ngClass]="{ 'no-margin-top': removeTopMargin }"
      class="row"
    >
      <div class="sidenav-content"
        class="col-12"
        [ngClass]="{
          'sidenav-content-full': contentUISizing
        }"
      >
       <router-outlet></router-outlet>
      </div>
    </mat-sidenav-content>

  </mat-sidenav-container>
  `,
  styles: [`

    .sidenav-content {
      width: 75%;
      min-height: 100vh;
      margin-left: auto;
      margin-right: auto;
      margin-top: 9%;
      margin-bottom: 10px;
    }

    .bg-sidenav-container {
      background: linear-gradient(
        45deg,
        rgba(30, 30, 50, 0.997),
        rgba(30, 30, 50, 0.887),
        rgba(30, 30, 50, 0.997)
      );
      background-color: rgba(30, 30, 50, 0.887);

      background-repeat: no-repeat;
    }

  .bg-sidenav {
    background-color: #28283cf9
  }

  .mat-list-item {
    color: hsla(0, 0%, 100%, 0.8);
  }

  .collapsed {
    display: none;
  }

  .collapsed-nav {
    position: fixed;
    top: 0;
    min-height: 100vh;
    font-weight: bold;
    width: 2.3rem;
    z-index: 2000;

    .collapsed-nav-item {
      margin-top: 8rem;
    }
  }

  .sidenav-content-full {
    width: 100%;
    overflow-x: hidden;
  }

  .no-margin-top {
    margin-top: -3%;
  }
  ::ng-deep .mat-drawer-inner-container {
    height: 75% !important;
    margin-top: 25%;
  }
  `]
})

export class SideNavComponent implements OnInit {
  @Input() nav: Nav;
  @Input() contentUISizing: SideNavContentSizing;
  @Input() removeTopMargin: boolean;
  @Input() toggleNavbar = false;
  @Input() isOpen: boolean;
  @Input() mode: SideNavMode;
  @Output() navigate = new EventEmitter<{
  path: string[];
    queryParams: { [key: string]: string | number };
    toggleNavbar: boolean
  }>();



  constructor() { }


  goToLocation(path: string[], queries: any) {
    this.navigate.emit({
      path,
      toggleNavbar: this.toggleNavbar,
      queryParams: queries});
  }
  ngOnInit() { }
}
