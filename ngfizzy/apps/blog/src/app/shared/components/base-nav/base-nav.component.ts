import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Nav } from '../../models';

@Component({
  selector: 'app-base-nav',
  template: ``
})

export class BaseNavComponent implements OnInit {
    @Input() nav: Nav;
    @Input() isOpen: boolean;
    @Output() navigate = new EventEmitter<{
        path: string[];
        queryParams?: { [key: string]: string | number };
        toggleNavbar: boolean
      }>();

  constructor() { }

  ngOnInit() { }

  goToLocation(path: string[], queries: any) {
    this.navigate.emit({
      path,
      toggleNavbar: false,
      queryParams: queries
    });
  }

}
