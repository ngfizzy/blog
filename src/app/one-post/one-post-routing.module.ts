import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnePostComponent } from './one-post.component';

import { PostComponent } from '../shared/components/post/post.component';

const routes: Routes =  [
  {
    path: '',
    component: OnePostComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class OnePostRoutingModule {
  static readonly routeComponents = [
    OnePostComponent,
  ];
}
