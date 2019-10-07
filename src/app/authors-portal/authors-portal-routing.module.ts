import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthorsPortalComponent } from './authors-portal.component';
import { AuthGuard } from './auth.guard';
import { CreatePostComponent } from './create-post/create-post.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts'
  },
  {
    path: 'posts',
    canLoad: [ AuthGuard ],
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./authors-posts/authors-posts.module')
      .then(mod => mod.AuthorsPostsModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AuthorsPortalRoutingModule {
  static readonly moduleComponents = [
    LoginComponent,
    AuthorsPortalComponent,
    // should move later
    CreatePostComponent,
  ];
}
