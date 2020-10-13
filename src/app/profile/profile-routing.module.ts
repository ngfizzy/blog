import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './containers/bio/bio.component';
import { WorkExperienceComponent } from './containers/work-experience/work-experience.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      { path: 'work-experience', component: WorkExperienceComponent },
      { path: '', pathMatch: 'full', component: BioComponent },
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
