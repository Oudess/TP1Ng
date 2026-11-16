import { Component, Input, inject } from '@angular/core';
import { Cv } from '../models/cv.model';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-cv-detail',
  standalone: true,
  template: `
    @if (cv) {
      <div class="card text-center border-0 shadow-sm">
        <div class="card-header bg-white border-0 small text-muted">
          "To be or not to be, this is my awesome motto!"
        </div>
        <div class="card-body">
          <h5 class="card-title fw-normal mt-3">Job Description</h5>
          <p class="card-text small">{{ cv.job }}</p>
          <div class="row mt-4">
            <div class="col border-end">
              <div class="fs-5">{{ cv.age }}</div>
              <small class="text-muted">Age</small>
            </div>
            <div class="col border-end">
              <div class="fs-5">{{ cv.cin }}</div>
              <small class="text-muted">CIN</small>
            </div>
            <div class="col">
              <div class="fs-5">{{ cv.id }}</div>
              <small class="text-muted">Id</small>
            </div>
          </div>
        </div>
        <div class="card-footer bg-white d-flex justify-content-center gap-1">
          <button class="btn btn-primary btn-sm" (click)="embaucher()">embaucher</button>
          <button class="btn btn-dark btn-sm">détails</button>
        </div>
      </div>
    } @else {
      <p class="text-muted">Cliquez sur un CV pour afficher ses détails.</p>
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