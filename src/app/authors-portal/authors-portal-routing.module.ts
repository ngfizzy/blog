import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AuthorsPortalComponent } from './authors-portal.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'articles'
  },
  {
    path: 'articles',
    canLoad: [ AuthGuard ],
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./authors-articles/authors-articles.module')
      .then(mod => mod.AuthorsArticlesModule),
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
