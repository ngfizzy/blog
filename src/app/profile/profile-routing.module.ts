import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './containers/bio/bio.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: '',
    component: ProfileComponent,
    children: [
      { path: '', component: BioComponent }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)],
})
export class ProfileRoutingModule {
  static readonly routeComponents = [
    BioComponent,
    ProfileComponent
  ];
}
