import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  exports: [ SpinnerComponent, MatCardModule, CommonModule ],
  declarations: [ SpinnerComponent ],
  providers: []
})
export class SharedModule {}
