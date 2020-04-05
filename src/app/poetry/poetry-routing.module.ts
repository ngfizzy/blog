import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoetryComponent } from './poetry.component';
import { PoemsComponent } from './containers/poems/poems.component';
import { PoemDialogViewComponent } from './containers/poem-dialog-view/poem-dialog-view.component';

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
            path: ':id/paused',
            component: PoemDialogViewComponent,
          },
          {
            path: ':id/play',
            component: PoemDialogViewComponent,
          },
          {
            path: ':id',
            component: PoemDialogViewComponent,
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
    PoemDialogViewComponent,
  ];
}
