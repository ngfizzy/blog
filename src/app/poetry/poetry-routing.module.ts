import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoetryComponent } from './poetry.component';
import { PoemsComponent } from './containers/poems/poems.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'poems',
  },
  {
    path: 'poems',
    component: PoetryComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: PoemsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class PoetryRoutingModule {
  static readonly routeComponents = [ PoetryComponent, PoemsComponent ];
}
