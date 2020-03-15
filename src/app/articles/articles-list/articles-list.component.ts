import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import * as fromArticles from '../state';
import * as fromArticlesActions from '../state/articles.actions';
import { ArticlesState } from '../state/articles.state';
import { Article } from '../../shared/models/article.interface';
import { ArticleComponentConfig } from '../../shared/models/article-component-config.interface';

@Component({
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {
articles$: Observable<Article[]>;
articleConfig: ArticleComponentConfig = {
  isActive: false,
  isExpandedView: false,
  isTouched: false,
  canToggle: true,
  isFull: true,
};


constructor(
  private store: Store<ArticlesState>,
  private toastr: ToastrService,
) {}

  ngOnInit() {
    this.articles$ = this.getArticles();
  }

  getArticles(): Observable<Article[]> {
    this.store.dispatch(new fromArticlesActions.GetAllArticles());

    return this.store.pipe(select(fromArticles.getAllArticles));
  }

  showNotification(message: string) {
    this.toastr.info(message);
  }
}
