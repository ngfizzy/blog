import { AuthorsPortalComponent } from './authors-portal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorsPortalComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: DashboardComponent,
      },
      {
        path: 'articles',
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
        loadChildren: () =>
          import('./authors-articles/authors-articles.module').then(
            mod => mod.AuthorsArticlesModule,
          ),
      },
      {
        path: 'categories',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        loadChildren: async () => (await import('./categories/categories.module')).CategoriesModule
      }
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AuthorsPortalRoutingModule {
  static readonly moduleComponents = [
    AuthorsPortalComponent,
    DashboardComponent,
    LoginComponent,
  ];
}
