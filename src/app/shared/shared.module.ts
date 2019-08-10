import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatCardModule } from '@angular/material/card';
import { PostComponent } from './components/post/post.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  exports: [ SpinnerComponent, PostComponent, MatCardModule, CommonModule ],
  declarations: [ SpinnerComponent, PostComponent ],
  providers: []
})
export class SharedModule {}
