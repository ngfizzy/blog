import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';

import { NumberWidgetComponent } from './number-widget.component';

@NgModule({
  imports: [SharedModule],
  exports: [SharedModule, NumberWidgetComponent],
  declarations: [NumberWidgetComponent],
  providers: [],
})
export class AuthorsPortalSharedModule {}
