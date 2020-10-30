import { Component, OnInit } from '@angular/core';
import { BaseNavComponent } from '../base-nav/base-nav.component';

@Component({
  selector: 'app-side-nav-collapsed',
  template: `
  <!-- Collapsed Side nav -->
  <div class="collapsed-nav bg-sidenav" *ngIf="!isOpen">
    <div class="collapsed-nav-item">
      <ng-container *ngFor="let item of nav?.items">
        <a (click)="goToLocation(item.path, item.queries, false);" class="p-2">
          <mat-list-item class="text-capitalize text-center border-bottom">{{ item.name[0] }}</mat-list-item>
        </a>
      </ng-container>
    </div>
  </div>
  `,
  styles: [`
    .bg-sidenav {
      background-color: #28283cf9
    }
    .collapsed-nav {
    position: fixed;
    top: 0;
    min-height: 100vh;
    font-weight: bold;
    width: 3.3rem;
    z-index: 2000;
    }

    .collapsed-nav-item {
      margin-top: 8rem;
      cursor: pointer;
      font-size: 1.2rem;
      padding: .5rem;
    }

    .collapsed-nav-item:hover {
      background-color: #28283cf9

    }
  `]
})
export class SideNavCollapsedComponent extends BaseNavComponent implements OnInit {

  ngOnInit() { }
}
