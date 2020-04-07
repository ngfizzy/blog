import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoetryComponent } from './poetry.component';
import { PoemsComponent } from './containers/poems/poems.component';
import { PoemDialogViewComponent } from './containers/poem-dialog-view/poem-dialog-view.component';
import { PoemsSingleRowListComponent } from './containers/poems-single-row-list/poems-single-row-list.component';
import { PoemCardViewComponent } from './containers/poem-card-view/poem-card-view.component';

const routes: Routes = [
  {
    path: '',
    component: PoetryComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'poems/grid' },
      { path: 'poems', pathMatch: 'full', redirectTo: 'poems/grid' },
      {
        path: 'poems/grid',
        component: PoemsComponent,
        children: [
          {
            path: ':id',
            component: PoemDialogViewComponent,
          },
        ],
      },
      {
        path: 'poems/row',
        component: PoemsSingleRowListComponent,
        children: [
          {
            path: ':id',
            component: PoemCardViewComponent,
          },
        ],
      },
    ],
  },
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
    PoemsSingleRowListComponent,
    PoemCardViewComponent,
  ];
}
