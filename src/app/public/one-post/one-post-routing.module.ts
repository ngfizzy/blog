import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnePostComponent } from './one-post.component';

const routes: Routes =  [
  {
    path: '',
    pathMatch: 'full',
    component: OnePostComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class OnePostRoutingModule {
  static readonly routeComponents = [
    OnePostComponent,
  ];
}
