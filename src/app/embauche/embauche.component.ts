import { Component, inject } from '@angular/core';
import { EmbaucheService } from '../services/embauche.service';
import { DefaultImagePipe } from '../pipes/default-image.pipe';

@Component({
  selector: 'app-embauche',
  standalone: true,
  imports: [DefaultImagePipe],
  styles: [`
    .panel { background: #e9ecef; border-radius: 4px; padding: 10px; }
    .list-group-item { border: 1px solid #5bc0de !important; border-radius: 30px !important; margin-bottom: 6px; }
    img { width: 120px; height: 120px; object-fit: cover; background: #fff; }
  `],
  template: `
    @if (embauches.length) {
      <div class="panel mt-4">
        <p class="small mb-1">Liste des cv pré embauchées:</p>
        <div class="list-group">
          @for (cv of embauches; track cv.id) {
            <div class="list-group-item bg-transparent d-flex align-items-center">
              <img [src]="cv.path | defaultImage" [alt]="cv.name" class="rounded-circle me-1" />
              <span class="small">{{ cv.firstname }} {{ cv.name }}</span>
            </div>
          }
        </div>
      </div>
    }
  `,
})
export class EmbaucheComponent {
  embauches = inject(EmbaucheService).getEmbauches();
}
