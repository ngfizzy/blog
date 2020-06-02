import { AuthorsArticlesListComponent } from './components/authors-articles-list/authors-articles-list.component';
import { ListPanelComponent } from './components/list-panel/list-panel.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';

import { NumberWidgetComponent } from './components/number-widget/number-widget.component';

@NgModule({
  imports: [SharedModule],
  exports: [
    SharedModule,
    NumberWidgetComponent,
    ListPanelComponent,
    AuthorsArticlesListComponent,
  ],
  declarations: [
    NumberWidgetComponent,
    ListPanelComponent,
    AuthorsArticlesListComponent,
  ],
  providers: [],
})
export class AuthorsPortalSharedModule {}
