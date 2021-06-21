import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material';
import { PostsComponent } from './posts.component';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule
  ],
  exports: [
    PostsComponent
  ]
})

export class PostsModule {}