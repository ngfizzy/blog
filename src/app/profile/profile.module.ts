import { NgModule } from '@angular/core';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProfileLinkComponent } from './component/profile-link/profile-link.component';

@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule
  ],
  declarations: [
    ...ProfileRoutingModule.routeComponents,
    ProfileLinkComponent
  ]
})
export class ProfileModule { }
