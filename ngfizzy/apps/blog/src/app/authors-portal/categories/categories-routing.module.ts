import { NgModule } from '@angular/core';

import { CategoriesComponent } from './containers/categories.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CategoriesComponent
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class CategoriesRoutingModule {
  public static routeComponents = [CategoriesComponent];
}
