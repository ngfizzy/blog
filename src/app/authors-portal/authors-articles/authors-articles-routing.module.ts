import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthorsArticlesComponent } from './containers/authors-articles/authors-articles.component';
import { AuthorsArticleComponent } from './containers/authors-article/authors-article.component';
import { ArticleEditComponent } from './containers/authors-article-edit/authors-article-edit.component';
import { AuthorsPublishComponent } from './containers/authors-publish/authors-publish.component';
import { AuthGuard } from '../auth.guard';


const routes: Routes = [
  {
    path: '',
    component: AuthorsArticlesComponent,
    canLoad: [AuthGuard],
    children: [
      {
        path: ':id',
        component: AuthorsArticleComponent,
        pathMatch: 'full',
      },
      {
        path: 'edit/:id',
        component: ArticleEditComponent,
      },
      {
        path: ':id/publish',
        component: AuthorsPublishComponent,
      }
    ],
  },
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes)],
  exports: [ RouterModule ],
})
export class AuthorsArticlesRoutingModule {
  static readonly routeComponents = [
    AuthorsArticlesComponent,
    AuthorsArticleComponent,
    AuthorsPublishComponent,
    ArticleEditComponent,
  ];
}
