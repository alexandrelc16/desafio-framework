import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/core/services/todos.service';
import { UsersService } from 'src/app/core/services/users.service';
import { Todos } from 'src/app/model/todos.interface';
import { Users } from 'src/app/model/users.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {

  todos: Todos[];
  users: Users[];
  completeTodos: {todo: Todos, user: Users}[] = [];

  constructor(
    private todosService: TodosService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.showTodos();
  }

  private showTodos() {
    this.todosService.getTodos()
      .subscribe(
        (data: Todos[]) => {
          this.todos = data;
          this.getUsers();
        },
        (error) => console.log(error)
      );
  }

  private getUsers() {
    this.usersService.getUsers()
      .subscribe(
        (data: Users[]) => {
          this.users = data;
          this.setCompleteTodos();
        },
        (error) => console.log(error)
      );
  }

  private setCompleteTodos() {
    this.users.map(user => 
      this.todos.map(todo => {
        if (todo.userId === user.id)
          this.completeTodos.push({
            todo: todo,
            user: user
          })
      })
    );
  }

}
