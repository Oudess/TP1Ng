import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Cv } from '../models/cv.model';
import { DefaultImagePipe } from '../pipes/default-image.pipe';

@Component({
  selector: 'app-cv-item',
  standalone: true,
  imports: [DefaultImagePipe],
  styles: [`
    :host { display: flex; align-items: center; cursor: pointer; }
    img { width: 40px; height: 40px; object-fit: cover; background: #fff; }
  `],
  template: `
    <img [src]="cv.path | defaultImage" [alt]="cv.name" class="rounded-circle me-1" />
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
