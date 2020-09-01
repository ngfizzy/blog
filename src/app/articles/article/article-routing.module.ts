import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleComponent } from './article.component';
import { AuthGuard } from 'src/app/authors-portal/auth.guard';

const routes: Routes =  [
  {
    path: '',
    pathMatch: 'full',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    component: ArticleComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class ArticleRoutingModule {
  static readonly routeComponents = [
    ArticleComponent,
  ];
}
