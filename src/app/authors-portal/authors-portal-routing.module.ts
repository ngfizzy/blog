import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AuthorsPortalComponent } from './authors-portal.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
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
    AuthorsPortalComponent,
    LoginComponent,
  ];
}
