import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-poetry-children-wrapper',
  templateUrl: './poetry-children-wrapper.component.html',
  styleUrls: [ './poetry-children-wrapper.component.scss' ]
})
export class PoetryChildrenWrapperComponent implements OnInit, OnDestroy {
  constructor() { }

  ngOnInit() {
    document.body.style.overflowY = 'hidden';
  }

 ngOnDestroy() {
   document.body.style.overflowY = 'auto';
 }
}
