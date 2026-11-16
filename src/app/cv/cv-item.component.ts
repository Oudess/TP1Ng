import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Cv } from '../models/cv.model';

@Component({
  selector: 'app-cv-item',
  standalone: true,
  styles: [':host { cursor: pointer; }'],
  template: `
    <img [src]="cv.path" [alt]="cv.name" width="40" height="40"
         class="rounded-circle me-2 border" />
    <span class="small">{{ cv.firstname }} {{ cv.name }}</span>
  `,
})
export class CvItemComponent {
  @Input({ required: true }) cv!: Cv;
  @Output() selectCv = new EventEmitter<Cv>();

  @HostListener('click')
  onSelect(): void {
    this.selectCv.emit(this.cv);
  }
}