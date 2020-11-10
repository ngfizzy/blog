import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../models';

@Component({
  selector: 'app-entity-toolbar',
  template: `
  `,
  styleUrls: ['./entity-toolbar.component.scss'],

})
export class EntityToolbarComponent implements OnInit {
  @Input() comment: Comment & { date: Date , audience: string };

  constructor() { }

  ngOnInit(): void {
  }

}
