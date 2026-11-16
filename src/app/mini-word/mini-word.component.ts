import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mini-word',
  standalone: true,
  imports: [FormsModule, NgStyle],
  template: `
    <p class="mt-4 mb-2"
       [ngStyle]="{ color: couleur, 'font-size.px': taille, 'font-family': police }">
      Test
    </p>
    <div class="row g-2">
      <div class="col">
        <input type="color" class="form-control form-control-color w-100"
               [(ngModel)]="couleur" />
      </div>
      <div class="col">
        <input type="number" class="form-control" min="8" max="100"
               [(ngModel)]="taille" />
      </div>
      <div class="col">
        <select class="form-select" [(ngModel)]="police">
          @for (p of polices; track p) {
            <option [value]="p">{{ p }}</option>
          }
        </select>
      </div>
    </div>
  `,
})
export class MiniWordComponent {
  couleur = '#2e7d32';
  taille = 30;
  police = 'arial';
  polices = ['arial', 'verdana', 'georgia', 'times new roman', 'courier new', 'comic sans ms'];
}