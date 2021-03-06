import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { fromEvent, Subject } from 'rxjs';
import {
  map,
  debounceTime,
  switchMap,
  takeUntil,
  throttleTime,
  tap,
} from 'rxjs/operators';

import * as fromAuthorsArticlesState from '../../state';
import * as fromAuthorsArticlesActions from '../../state/authors-articles.actions';
import { Article } from '@ngfizzy/entities';
import { Tag } from '@ngfizzy/entities';

@Component({
  templateUrl: './authors-article-edit.component.html',
  styleUrls: ['./authors-article-edit.component.scss'],
})
export class ArticleEditComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('editor', { static: true, read: ElementRef }) editor: ElementRef;

  unsubscribe$ = new Subject();

  article: Article;
  articleBody: string;
  options = {
    hideIcons: ['FullScreen'],
  };
  articleTags: Tag[] = [];
  isLoading: boolean;
  articleId: number;

  constructor(
    private store: Store<fromAuthorsArticlesState.AuthorsArticlesState>,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const paramId = paramMap.get('id');

      if (paramId === 'new') {
        const body = `# New Article
        `;

        this.store.dispatch(
          new fromAuthorsArticlesActions.CreateArticle({
            body,
            title: 'New Article'
          }),
        );
        this.articleBody = body;
      }
    });

    this.setArticleState();
  }

  ngAfterViewInit(): void {
    this.saveAfter(3000);
    this.changeArticleStatusAfter(1000);
  }

  tagArticle(tag: string) {
    this.store.dispatch(
      new fromAuthorsArticlesActions.TagArticle({
        tag,
        articleId: this.articleId,
      }),
    );
  }

  untagArticle(tagId: number) {
    this.store.dispatch(
      new fromAuthorsArticlesActions.UntagArticle({
        tagId,
        articleId: this.articleId,
      }),
    );
  }

  private addArticleToCategory(articleId: number, category: string) {
    this.store.dispatch(
      new fromAuthorsArticlesActions.CategorizeArticle({
        articleId,
        category,
      }),
    );
  }

  /**
   * Wait for x milliseconds before saving
   *
   * @param time Time to wait before saving article in milliseconds
   */
  private saveAfter(time: number) {
    fromEvent(this.editor.nativeElement, 'keyup')
      .pipe(
        debounceTime(time),
        switchMap(() => this.route.params.pipe(map(params => params.id))),
        tap(articleId => {
          if (articleId === 'new') {
            this.router.navigate(['/authors/articles/edit', this.articleId]);
          }
        }),
        takeUntil(this.unsubscribe$),
      )
      .subscribe(() => {
        return this.store.dispatch(
          new fromAuthorsArticlesActions.EditArticleBody({
            articleId: this.articleId,
            body: this.articleBody,
          }),
        );
      });
  }

  /**
   * Waits for x number of milliseconds before changing article save status
   *
   * @param time Time in ms to wait before changing save status
   */
  private changeArticleStatusAfter(time: number) {
    fromEvent(this.editor.nativeElement, 'keyup')
      .pipe(throttleTime(time), takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.store.dispatch(
          new fromAuthorsArticlesActions.ChangeArticleStatus('saving'),
        );
      });
  }

  private setArticleState() {
    this.store
      .pipe(
        select(fromAuthorsArticlesState.viewArticleState),
        takeUntil(this.unsubscribe$),
      )
      .subscribe(articleState => {
        this.isLoading = articleState.isLoading;
        this.article = articleState.article;
        this.articleId = articleState.article.id;
        this.articleTags = articleState.article.tags;

        if (!this.articleBody) {
          this.articleBody = this.article.body;
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
