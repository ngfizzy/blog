import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [SharedModule, CommonModule],
  exports: [SharedModule],
  declarations: [],
})
export class PoetrySharedModule { }
