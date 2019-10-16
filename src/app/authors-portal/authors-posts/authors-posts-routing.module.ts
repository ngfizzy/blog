import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsPostsComponent } from './containers/authors-posts/authors-posts.component';
import { AuthorsPostComponent } from './containers/authors-post/authors-post.component';
import { PostEditComponent } from './containers/post-edit/create-post.component';


const routes: Routes = [
  {
    path: '',
    component: AuthorsPostsComponent,
    children: [
      {
        path: ':id',
        component: AuthorsPostComponent,
      },
      {
        path: 'edit/:id',
        component: PostEditComponent,
      }
    ],
  },
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes)],
  exports: [ RouterModule ],
})
export class AuthorsPostsRoutingModule {
  static readonly routeComponents = [
    AuthorsPostsComponent,
    AuthorsPostComponent,
    PostEditComponent,
  ];
}
