import { NgModule, ɵisBoundToModule__POST_R3__, Optional, SkipSelf } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { AuthorsToolbarComponent } from './authors-toolbar/authors-toolbar.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AuthorsToolbarComponent,
  ],
  imports: [
    RouterModule,
    SharedModule,
  ],
  exports: [
    // RouterModule,
    AuthorsToolbarComponent,
  ],
  providers: [
    AuthGuard,
    AuthService,
  ],
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
