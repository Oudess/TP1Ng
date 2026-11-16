import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../models/cv.model';
import { CvItemComponent } from './cv-item.component';

@Component({
  selector: 'app-cv-list',
  standalone: true,
  imports: [CvItemComponent],
  template: `
    <div class="list-group">
      @for (cv of cvs; track cv.id; let even = $even) {
        <app-cv-item class="list-group-item"
                     [class.list-group-item-secondary]="even"
                     [class.list-group-item-primary]="!even"
                     [cv]="cv"
                     (selectCv)="onSelect($event)"></app-cv-item>
      }
    </div>
  `,
})
export class CvListComponent {
  @Input() cvs: Cv[] = [];
  @Output() selectCv = new EventEmitter<Cv>();

  onSelect(cv: Cv): void {
    this.selectCv.emit(cv);
  }
}