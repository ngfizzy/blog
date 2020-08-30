import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
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
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  static readonly routeComponents = [HomeComponent];
}
