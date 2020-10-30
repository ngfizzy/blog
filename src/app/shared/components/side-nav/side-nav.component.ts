import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Nav, SideNavContentSizing, SideNavMode } from '../../models';
import { BaseNavComponent } from '../base-nav/base-nav.component';

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
  styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent  extends BaseNavComponent implements OnInit {
  @Input() contentUISizing: SideNavContentSizing;
  @Input() removeTopMargin: boolean;
  @Input() toggleNavbar = false;
  @Input() isOpen: boolean;
  @Input() mode: SideNavMode;

  ngOnInit() { }
}
