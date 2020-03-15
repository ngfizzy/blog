import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesComponent } from './articles.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'articles'
  },
  {
    path: 'articles',
    component: ArticlesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren:  () => import('./articles-list/articles-list.module').then(mod => mod.ArticlesListModule)
      },

      {
        path: ':articleId',
        loadChildren: () => import('./article/article.module')
          .then(mod => mod.ArticleModule),
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class ArticleRoutingModule {
  static readonly routeComponents = [
    ArticlesComponent,
  ];
}
