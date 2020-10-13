import { NgModule } from '@angular/core';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { WorkExperienceComponent } from './containers/work-experience/work-experience.component';

@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule
  ],
  declarations: [
    ...ProfileRoutingModule.routeComponents,
    WorkExperienceComponent
  ]
})
export class ProfileModule { }
