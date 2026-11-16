import { Component, inject } from '@angular/core';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-embauche',
  standalone: true,
  template: `
    <h5 class="mt-4">Liste des embauchés ({{ embauches.length }})</h5>
    @if (embauches.length === 0) {
      <p class="text-muted">Aucun CV embauché pour le moment.</p>
    }
    <ul class="list-group">
      @for (cv of embauches; track cv.id) {
        <li class="list-group-item">
          <img [src]="cv.path" [alt]="cv.name" width="32" height="32"
               class="rounded-circle me-2" />
          {{ cv.firstname }} {{ cv.name }} – {{ cv.job }}
        </li>
      }
    </ul>
  `,
})
export class EmbaucheComponent {
  embauches = inject(EmbaucheService).getEmbauches();
}