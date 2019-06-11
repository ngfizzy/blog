import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsComponent } from './posts.component';
import { RouterModule } from '@angular/router';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
  ],
  exports: [RouterModule],
  declarations: [
    PostsComponent,
  ]
})
export class PostModule {}
