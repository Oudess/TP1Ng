import { Component } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-week-todo',
  standalone: true,
  imports: [TodoComponent],
  template: `
    <p class="small mb-1">week todo</p>
    <div class="row justify-content-center g-4">
      @for (jour of jours; track jour) {
        <div class="col-2">
          <h6 class="small text-muted mb-1">{{ jour }}</h6>
          <app-todo [compact]="true"></app-todo>
        </div>
      }
    </div>
  `,
})
export class WeekTodoComponent {
  jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
}