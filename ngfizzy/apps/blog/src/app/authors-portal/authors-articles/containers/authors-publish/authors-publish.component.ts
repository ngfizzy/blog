import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap, flatMap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import * as fromAuthorsArticles from '../../state';
import * as fromAuthorsArticlesActions from '../../state/authors-articles.actions';
import { Observable } from 'rxjs';
import { Article } from '../../../../shared/models';

@Component({
  selector: 'app-authors-publish',
  templateUrl: './authors-publish.component.html',
  styleUrls: [ './authors-publish.component.scss' ],
})
export class AuthorsPublishComponent implements OnInit {
  isEditingArticleTitle: boolean;
  category: string;
  article$: Observable<Article>;
  themeImageUrl = 'assets/code.jpeg';
  customThemeImageUrl = '';

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

  addThemeImage(articleId: number) {
    this.themeImageUrl = this.customThemeImageUrl;
    this.store.dispatch(new fromAuthorsArticlesActions.AddThemeImage({
      articleId,
      themeImageUrl: this.themeImageUrl
    }));
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
