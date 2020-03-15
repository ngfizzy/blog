import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesListComponent } from './articles-list.component';


const routes: Routes =  [
  {
    path: '',
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
