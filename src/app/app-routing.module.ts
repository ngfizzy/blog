import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts'
  },
  {
    path: 'posts',
    loadChildren:  () => import('./posts/posts.module').then(mod => mod.PostsModule)
  },
  {
    path: 'posts/:postId',
    loadChildren: () => import('./one-post/one-post.module')
      .then(mod => mod.OnePostModule),
  },
  {
    path: 'authors',
    loadChildren: () => import('./authors-portal/authors-portal.module').then(mod => mod.AuthorsPortal),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
