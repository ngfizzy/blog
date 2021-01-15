import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '@ngfizzy/entities';

@Component({
  selector: 'app-featured-articles-list',
  template: ` <mat-list class="w-100 h-100 list-group list">
      <div *ngIf="isLoading" class="list-spinner-container h-100">
          <app-loading-and-empty-state
            [isLoading]="isLoading"
            [content]="articles?.length"
          >
        </app-loading-and-empty-state>
      </div>
      <ng-container *ngFor="let article of articles">
          <app-featured-articles-list-item
            [article]="article"
          >

          </app-featured-articles-list-item>
        </ng-container>
    </mat-list>
  `,
})
export class FeaturedArticlesListComponent implements OnInit {
  @Input() articles: Article[];
  @Input() isLoading: boolean;

  @Output() itemSelected = new EventEmitter();

  constructor() { }

  ngOnInit() { }
}
