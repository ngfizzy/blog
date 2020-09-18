import { SectionComponent } from './components/section/section.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';

import { NumberWidgetComponent } from './components/number-widget/number-widget.component';
import { QuickActionButtonComponent } from './components/quick-action-button/quick-action.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [
    SharedModule,
    NumberWidgetComponent,
    QuickActionButtonComponent,
    SectionComponent,
  ],
  declarations: [
    NumberWidgetComponent,
    QuickActionButtonComponent,
    SectionComponent,
  ],
  providers: [],
})
export class AuthorsPortalSharedModule {}
