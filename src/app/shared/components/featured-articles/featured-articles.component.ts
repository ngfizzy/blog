import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { featuredArticles, isFeaturedArticlesLoading } from 'src/app/shared-store';
import { getFeaturedArticles } from 'src/app/shared-store/shared-store.actions';
import { Article } from '../../models';

@Component({
  selector: 'app-featured-articles',
  template: `
        <app-list-panel [listTitle]="'Featured Articles'">
          <app-featured-articles-list
            [articles]="featuredArticles$ | async"
            [isLoading]="isFeaturedArticleLoading$ | async"
            (itemSelected)="goToArticle($event)"
          ></app-featured-articles-list>
        </app-list-panel>
  `,
})
export class FeaturedArticlesComponent implements OnInit {
  featuredArticles$: any;
  isFeaturedArticleLoading$: any;
  constructor(private store: Store, private router: Router) { }

  ngOnInit() {
    this.store.dispatch(getFeaturedArticles());

    this.featuredArticles$ = this.store.pipe(select(featuredArticles));
    this.isFeaturedArticleLoading$ = this.store.pipe(select(isFeaturedArticlesLoading));
  }

  goToArticle(article: Article) {
    this.router.navigate(['/articles', article.id]);
  }
}
