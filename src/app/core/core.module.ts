import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlbumsService } from './services/albums.service';
import { PostsService } from './services/posts.service';
import { TodosService } from './services/todos.service';
import { UsersService } from './services/users.service';

@NgModule({
  imports: [
    RouterModule,
    HttpClientModule
  ],
	exports: [RouterModule],
  providers: [
    PostsService,
    AlbumsService,
    TodosService,
    UsersService
  ]
})

export class CoreModule { }