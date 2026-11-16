import { Component, Input, inject } from '@angular/core';
import { Cv } from '../models/cv.model';
import { EmbaucheService } from '../services/embauche.service';
import { DefaultImagePipe } from '../pipes/default-image.pipe';

/**
 * Rotating card: the front shows the person, hovering flips it (rotateY 180°)
 * to show the back with the job description and the "embaucher" button.
 */
@Component({
  selector: 'app-cv-detail',
  standalone: true,
  imports: [DefaultImagePipe],
  styleUrl: './cv-detail.component.css',
  template: `
    @if (cv) {
      <div class="card-container">
        <div class="flipper">
          <!-- FRONT -->
          <div class="face front">
            <div class="cover"></div>
            <div class="text-center">
              <img class="avatar" [src]="cv.path | defaultImage" [alt]="cv.name" />
              <h4 class="fw-normal mt-3 mb-0">{{ cv.firstname }} {{ cv.name }}</h4>
              <p class="small text-muted">{{ cv.job }}</p>
              <p class="small px-4 mt-4">
                "Passionné par mon métier, je cherche toujours à apprendre et à relever de nouveaux défis."
              </p>
            </div>
            <div class="face-footer text-muted small">Auto Rotation</div>
          </div>

          <!-- BACK -->
          <div class="face back text-center">
            <p class="small text-muted fst-italic border-bottom pb-2 mx-3 mt-3">
              "To be or not to be, this is my awesome motto!"
            </p>
            <h5 class="fw-normal mt-4">Job Description</h5>
            <p class="small">{{ cv.job }}</p>
            <div class="row mx-2 mt-4">
              <div class="col border-end">
                <div class="fs-5">{{ cv.age }}</div>
                <small class="text-muted">Age</small>
              </div>
              <div class="col border-end">
                <div class="fs-5">{{ cv.cin }}</div>
                <small class="text-muted">Cin</small>
              </div>
              <div class="col">
                <div class="fs-5">{{ cv.id }}</div>
                <small class="text-muted">Id</small>
              </div>
            </div>
            <div class="face-footer">
              <button class="btn btn-primary btn-sm me-1" (click)="embaucher()">embaucher</button>
              <button class="btn btn-dark btn-sm">détails</button>
            </div>
          </div>
        </div>
      </div>
    }
  `,
})
export class CvDetailComponent {
  @Input() cv: Cv | null = null;
  private embaucheService = inject(EmbaucheService);

  embaucher(): void {
    if (this.cv) {
      this.embaucheService.embaucher(this.cv);
    }
  }
}
