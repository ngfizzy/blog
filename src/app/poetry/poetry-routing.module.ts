import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoetryComponent } from './poetry.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PoetryComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class PoetryRoutingModule {
  static readonly routeComponents = [ PoetryComponent ];
}
