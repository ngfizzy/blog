import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesRoutingModule } from './categories-routing.module';



@NgModule({
  imports: [SharedModule, CategoriesRoutingModule],
  exports: [],
  declarations: [
    ...CategoriesRoutingModule.routeComponents
  ],
  providers: [],
})
export class CategoriesModule { }