import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as fromAuthorsArticlesActions from '../../state/authors-articles.actions';
import * as fromAuthorsArticlesState from '../../state';
import { Article } from '@ngfizzy/entities';
import { ArticleComponentConfig } from '@ngfizzy/entities';

@Component({
  selector: 'app-authors-article',
  templateUrl: './authors-article.component.html',
  styleUrls: [ './authors-article.component.scss' ]
})
export class AuthorsArticleComponent implements OnInit {
  config: ArticleComponentConfig = {
    isActive: false,
    isExpandedView: true,
    isTouched: false,
    canToggle: false,
    isFull: true,
    shouldHideShadows: true,
    shouldShowActions: false,
  };

  article$: Observable<Article>;
  isLoading$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromAuthorsArticlesState.AuthorsArticlesState
    >) { }

  ngOnInit() {

    this.route.paramMap.subscribe((paramMap) => {
      this.store.dispatch(
        new fromAuthorsArticlesActions.ViewArticle(+paramMap.get('id'))
      );
    });

    this.article$ = this.store.pipe(select(fromAuthorsArticlesState.viewArticle));
    this.isLoading$ = this.store.pipe(select(fromAuthorsArticlesState.isArticleLoading));
  }
}
