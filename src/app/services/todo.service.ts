import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  logTodos(): void {
    console.log(this.todos);
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.logTodos();
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}