import { TogglePublished } from './../../state/authors-articles.actions';
import { SetPageTitle } from './../../../../core/state/core.actions';
import { Component, OnInit, NgZone } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { Article } from 'src/app/shared/models/article.interface';
import { ArticleComponentConfig } from 'src/app/shared/models/article-component-config.interface';
import * as fromAuthorsArticles from '../../state';
import * as fromAuthorsArticlesActions from '../../state/authors-articles.actions';
import { Comment } from 'src/app/shared/models';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-authors-articles',
  templateUrl: './authors-articles.component.html',
  styleUrls: ['./authors-articles.component.scss'],
})
export class AuthorsArticlesComponent implements OnInit {
  selectedArticle$: Observable<Article>;
  articles$: Observable<Article[]>;
  isEditingTitle: boolean;
  articleListItemConfig: ArticleComponentConfig;
  articleStatus$: Observable<'saved' | 'erred' | 'saving'>;
  selectedArticleId: number;
  articlesListLoad$: Observable<boolean>;
  isArticlesListLoading$: Observable<boolean>;
  showCommentsSection: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromAuthorsArticles.AuthorsArticlesState>,
  ) {}

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.store.dispatch(new SetPageTitle('Articles'));
    this.store.dispatch(new fromAuthorsArticlesActions.GetArticles());

    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.selectedArticleId = id ? +id : null;
    });

    this.articleListItemConfig = this.getArticlesConfig();

    this.articles$ = this.store.pipe(select(fromAuthorsArticles.getArticles));
    this.articlesListLoad$ = this.store.pipe(select(fromAuthorsArticles.getArticlesLoadingState));
    this.isArticlesListLoading$ = this.store.pipe(select(fromAuthorsArticles.isArticlesListLoading));
    this.selectedArticle$ = this.store.pipe(select(fromAuthorsArticles.viewArticle));
    this.articleStatus$ = this.store.pipe(select(fromAuthorsArticles.selectArticleStatus));
  }

  createArticle() {
    this.router.navigate(['authors/articles/edit/new']);
  }

  deleteArticle(articleId: number) {
    this.store.dispatch(new fromAuthorsArticlesActions.DeleteArticle(articleId));
  }

  showFullArticle(article: Article) {
    this.router.navigate(['authors/articles', article.id]);
  }

  search() {}

  getArticlesConfig() {
    return {
      isActive: false,
      isExpandedView: false,
      isTouched: false,
      canToggle: false,
      isMini: true,
      isFull: false,
      shouldHideShadows: true,
    };
  }

  saveTitle(title: string, articleId: number) {
    this.selectedArticleId = articleId;

    if (this.selectedArticleId) {
      this.store.dispatch(
        new fromAuthorsArticlesActions.EditArticleTitle({
          title,
          articleId: this.selectedArticleId,
        }),
      );
    }
  }

  togglePublished({ articleId, published }) {
    if (published) {
      this.store.dispatch(new TogglePublished({ articleId }));
    } else {
      this.router.navigate(['authors/articles', articleId, 'publish']);
    }
  }

  toggleCommentsSection(isOpen: boolean, articleId?: number) {
    this.showCommentsSection = isOpen;
  }

  deleteComment(comment: Comment) {
    this.store.dispatch(
      new fromAuthorsArticlesActions.ToggleCommentDelete({commentId: comment.id })
    );
  }
}
