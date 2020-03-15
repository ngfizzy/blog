import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './authors-portal/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'articles'
  },
  {
    path: 'articles',
    loadChildren: () => import('./articles/articles.module').then(mod => mod.ArticlesModule)
  },
  {
    path: 'poetry',
    loadChildren: () => import('./poetry/poetry.module').then(mod => mod.PoetryModule)
  },
  {
    path: 'authors',
    loadChildren: () => import('./authors-portal/authors-portal.module')
      .then(mod => mod.AuthorsPortal),
  },
  {
    path: 'about',
    component: AboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  static readonly routeComponents = [ AboutComponent ];
}
