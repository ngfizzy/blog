import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';

import { PostComponent } from '../shared/components/post/post.component';

const routes: Routes =  [
  {
    path: '',
    component: PostsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class PostsRoutingModule {
  static readonly routeComponents = [
    PostsComponent,
  ];
}
