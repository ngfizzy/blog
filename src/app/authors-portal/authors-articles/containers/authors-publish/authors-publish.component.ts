import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap, flatMap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import * as fromAuthorsArticles from '../../state';
import * as fromAuthorsArticlesActions from '../../state/authors-articles.actions';
import { Observable } from 'rxjs';
import { Article } from 'src/app/shared/models';

@Component({
  selector: 'app-authors-publish',
  templateUrl: './authors-publish.component.html',
  styleUrls: [ './authors-publish.component.scss' ],
})
export class AuthorsPublishComponent implements OnInit {
  isEditingArticleTitle: boolean;
  category: string;
  article$: Observable<Article>;

  constructor(
    private route: ActivatedRoute,
    private  store: Store<fromAuthorsArticles.AuthorsArticlesState>
  ) { }

  ngOnInit() {
    this.article$ = this.route.paramMap.pipe(
      tap(paramsMap =>
        this.store.dispatch(
          new fromAuthorsArticlesActions.ViewArticle(+paramsMap.get('id'))
        ),
      ),
      flatMap(() => this.store.pipe(select(fromAuthorsArticles.viewArticle)))
    );
  }

  addTag(tag: string, articleId: number) {
    this.store.dispatch(new fromAuthorsArticlesActions.TagArticle({ tag, articleId}));
  }

  removeTag(tagId: number, articleId: number) {
    this.store.dispatch(new fromAuthorsArticlesActions.UntagArticle({tagId, articleId}));
  }

  addToCategory(category: string, articleId: number) {
    this.store.dispatch(new fromAuthorsArticlesActions.CategorizeArticle({ category, articleId}));
  }

  togglePublished(articleId: number) {

    this.store.dispatch(new fromAuthorsArticlesActions.TogglePublished({ articleId}));
  }
}
