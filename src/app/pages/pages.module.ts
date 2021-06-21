import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { PostsModule } from './posts/posts.module';
import { AlbumsModule } from './albums/albums.module';
import { TodosModule } from './todos/todos.module';

@NgModule({
  imports: [
    HomeModule,
    PostsModule,
    AlbumsModule,
    TodosModule
  ],
  exports: [
    HomeModule,
    PostsModule,
    AlbumsModule,
    TodosModule
  ],
})
export class PagesModule { }