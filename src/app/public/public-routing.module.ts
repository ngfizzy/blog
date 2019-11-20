import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicComponent } from './public.component';


const routes: Routes = [
  {
    path: 'posts',
    component: PublicComponent,
    children: [
      {
        path: '',
        loadChildren:  () => import('./posts/posts.module').then(mod => mod.PostsModule)
      },
      {
        path: ':postId',
        loadChildren: () => import('./one-post/one-post.module')
          .then(mod => mod.OnePostModule),
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class PublicRoutingModule {
  static readonly routeComponents = [
    PublicComponent,
  ];
}
