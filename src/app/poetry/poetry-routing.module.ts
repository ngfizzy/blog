import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoetryComponent } from './poetry.component';
import { PoemsComponent } from './containers/poems/poems.component';
import { PoemDialogComponent } from './containers/poem-dialog/poem-dialog.component';

const routes: Routes = [
  {

    path: '',
    component: PoetryComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'poems' },
      {
        path: 'poems',
        component: PoemsComponent,
        children: [
          {
            path: ':id',
            component: PoemDialogComponent,
          },
        ]
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
  static readonly routeComponents = [
    PoetryComponent,
    PoemsComponent,
    PoemDialogComponent,
  ];
}
