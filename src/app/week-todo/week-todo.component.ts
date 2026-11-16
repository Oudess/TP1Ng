import { Component } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-week-todo',
  standalone: true,
  imports: [TodoComponent],
  template: `
    <h4>Exercice 9 : WeekTodo</h4>
    <div class="row">
      @for (jour of jours; track jour) {
        <div class="col">
          <h6>{{ jour }}</h6>
          <app-todo></app-todo>
        </div>
      }
    </div>
  `,
})
export class WeekTodoComponent {
  jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
}