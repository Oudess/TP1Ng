import { Component, inject } from '@angular/core';
import { Cv } from '../models/cv.model';
import { CvService } from '../services/cv.service';
import { CvListComponent } from './cv-list.component';
import { CvDetailComponent } from './cv-detail.component';
import { EmbaucheComponent } from '../embauche/embauche.component';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CvListComponent, CvDetailComponent, EmbaucheComponent],
  template: `
    <div class="row g-3">
      <div class="col-md-6">
        <app-cv-list [cvs]="cvs" (selectCv)="selectedCv = $event"></app-cv-list>
      </div>
      <div class="col-md-6">
        <app-cv-detail [cv]="selectedCv"></app-cv-detail>
      </div>
    </div>
    <app-embauche></app-embauche>
  `,
})
export class CvComponent {
  cvs: Cv[] = inject(CvService).getCvs();
  selectedCv: Cv | null = null;
}