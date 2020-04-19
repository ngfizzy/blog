import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import * as fromArticles from '../state';
import * as fromArticlesActions from '../state/articles.actions';
import { ArticlesState } from '../state/articles.state';
import { Article } from '../../shared/models/article.interface';
import { ArticleComponentConfig } from '../../shared/models/article-component-config.interface';
import { Title, Meta } from '@angular/platform-browser';
import { Poem } from 'src/app/shared/models';

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
  private title: Title,
  private meta: Meta,
) {}

  ngOnInit() {
    this.articles$ = this.getArticles();
    this.title.setTitle(`NgFizzy Blog - Tech`);
    this.meta.updateTag({
      name: 'Tech',
      content: 'All things software development'
    });
  }

  getArticles(): Observable<Article[]> {
    this.store.dispatch(new fromArticlesActions.GetAllArticles());

    return this.store.pipe(select(fromArticles.getAllArticles));
  }

  updateTitleAndMeta(article: Article) {
    this.title.setTitle(`NgFizzy Blog - Tech: ${article.title}`);
    this.meta.updateTag({
      name: `NgFizzy Blog - Full Article`,
      content: article.title
    });
  }

  showNotification(message: string) {
    this.toastr.info(message);
  }
}
