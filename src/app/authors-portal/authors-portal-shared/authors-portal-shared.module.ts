import { SectionComponent } from './components/section/section.component';
import { AuthorsArticlesListComponent } from './components/authors-articles-list/authors-articles-list.component';
import { ListPanelComponent } from './components/list-panel/list-panel.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';

import { NumberWidgetComponent } from './components/number-widget/number-widget.component';
import { QuickActionButtonComponent } from './components/quick-action-button/quick-action.component';

@NgModule({
  imports: [SharedModule],
  exports: [
    SharedModule,
    NumberWidgetComponent,
    ListPanelComponent,
    AuthorsArticlesListComponent,
    QuickActionButtonComponent,
    SectionComponent,
  ],
  declarations: [
    NumberWidgetComponent,
    ListPanelComponent,
    AuthorsArticlesListComponent,
    QuickActionButtonComponent,
    SectionComponent,
  ],
  providers: [],
})
export class AuthorsPortalSharedModule {}
