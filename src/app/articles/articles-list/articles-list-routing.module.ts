import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesListComponent } from './articles-list.component';
import { AuthGuard } from 'src/app/authors-portal/auth.guard';


const routes: Routes =  [
  {
    path: '',
    // pathMatch: 'full',
    // canLoad: [AuthGuard],
    // canActivate: [AuthGuard],
    component: ArticlesListComponent,
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class ArticlesListRoutingModule {
  static readonly routeComponents = [
    ArticlesListComponent,
  ];
}
