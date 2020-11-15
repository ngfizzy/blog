import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'profile'
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule)
  },
  {
    path: 'articles',
    loadChildren: () =>
      import('./articles/articles.module').then(mod => mod.ArticlesModule),
  },
  {
    path: 'poetry',
    loadChildren: () =>
      import('./poetry/poetry.module').then(mod => mod.PoetryModule),
  },
  {
    path: 'authors',
    loadChildren: () =>
      import('./authors-portal/authors-portal.module').then(
        mod => mod.AuthorsPortal,
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {
  public static routeComponents = [];
}
