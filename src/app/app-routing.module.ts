import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './pages/albums/albums.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { TodosComponent } from './pages/todos/todos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
			title: 'Home'
		}
  },
  {
    path: 'posts',
    component: PostsComponent,
    data: {
			title: 'Posts'
		}
  },
  {
    path: 'albums',
    component: AlbumsComponent,
    data: {
			title: 'Albums'
		}
  },
  {
    path: 'todos',
    component: TodosComponent,
    data: {
			title: 'Todos'
		}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
