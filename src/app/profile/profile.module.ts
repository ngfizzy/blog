import { NgModule } from '@angular/core';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProfileLinkComponent } from './component/profile-link/profile-link.component';
import { WorkExperienceComponent } from './containers/work-experience/work-experience.component';

@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule
  ],
  declarations: [
    ...ProfileRoutingModule.routeComponents,
    ProfileLinkComponent,
    WorkExperienceComponent
  ]
})
export class ProfileModule { }
