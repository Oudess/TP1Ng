import { Component, Input, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, NgTemplateOutlet],
  providers: [TodoService],
  template: `
    @if (compact) {
      <!-- WeekTodo: one small column per day -->
      <label class="form-label small mb-0">name</label>
      <input class="form-control form-control-sm mb-1" [(ngModel)]="name" />
      <label class="form-label small mb-0">content</label>
      <input class="form-control form-control-sm mb-2" [(ngModel)]="content" />
      <button class="btn btn-primary btn-sm mb-2" (click)="addTodo()">add</button>
      <ng-container *ngTemplateOutlet="list"></ng-container>
    } @else {
      <div class="row">
        <div class="col-md-6">
          <ng-container *ngTemplateOutlet="list"></ng-container>
        </div>
        <div class="col-md-6">
          <label class="form-label small mb-0">Name :</label>
          <input class="form-control mb-1" [(ngModel)]="name" />
          <label class="form-label small mb-0">Content :</label>
          <input class="form-control mb-2" [(ngModel)]="content" />
          <button class="btn btn-primary btn-sm" (click)="addTodo()">Add Todo</button>
        </div>
      </div>
    }

    <ng-template #list>
      <ul class="list-group">
        @for (todo of todos; track todo) {
          <li class="list-group-item d-flex justify-content-between align-items-center small">
            <span><strong>{{ todo.name }}</strong> : {{ todo.content }}</span>
            <button class="btn btn-danger btn-sm py-0" (click)="deleteTodo(todo)">x</button>
          </li>
        }
      </ul>
    </ng-template>
  `,
})
export class TodoComponent {
  @Input() compact = false;
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