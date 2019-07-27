import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './components/posts.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes =  [
  {
    path: '',
    component: PostsComponent,
  },
  {
    path: ':postId',
    component: PostComponent,

  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class PostsRoutingModule {
  static readonly routeComponents = [
    PostComponent,
    PostsComponent,
  ];
}
