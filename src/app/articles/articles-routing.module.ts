import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesComponent } from './articles.component';
import { AuthGuard } from '../authors-portal/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        // canLoad: [AuthGuard],
        // canActivate: [AuthGuard],
        loadChildren:  () => import('./articles-list/articles-list.module').then(mod => mod.ArticlesListModule)
      },
      {
        path: ':articleId',
        pathMatch: 'full',
        // canLoad: [AuthGuard],
        // canActivate: [AuthGuard],
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
