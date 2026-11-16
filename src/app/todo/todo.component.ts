import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  providers: [TodoService],
  template: `
    <div class="mb-2">
      <label class="form-label mb-0">Name :</label>
      <input class="form-control" [(ngModel)]="name" />
    </div>
    <div class="mb-2">
      <label class="form-label mb-0">Content :</label>
      <input class="form-control" [(ngModel)]="content" />
    </div>
    <button class="btn btn-primary btn-sm mb-3" (click)="addTodo()">Add Todo</button>
    <ul class="list-group">
      @for (todo of todos; track todo) {
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span><strong>{{ todo.name }}</strong> : {{ todo.content }}</span>
          <button class="btn btn-danger btn-sm" (click)="deleteTodo(todo)">x</button>
        </li>
      }
    </ul>
  `,
})
export class TodoComponent {
  private todoService = inject(TodoService);
  todos = this.todoService.getTodos();
  name = '';
  content = '';

  addTodo(): void {
    if (!this.name.trim()) return;
    this.todoService.addTodo(new Todo(this.name, this.content));
    this.name = '';
    this.content = '';
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo);
  }
}