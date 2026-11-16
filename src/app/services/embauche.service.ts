import { Injectable, inject } from '@angular/core';
import { Cv } from '../models/cv.model';
import { ToastService } from './toast.service';

@Injectable({ providedIn: 'root' })
export class EmbaucheService {
  private toast = inject(ToastService);
  private embauches: Cv[] = [];

  getEmbauches(): Cv[] {
    return this.embauches;
  }

  embaucher(cv: Cv): void {
    if (this.embauches.includes(cv)) {
      this.toast.show(`${cv.firstname} ${cv.name} est déjà embauché.`);
      return;
    }
    this.embauches.push(cv);
    if (this.embauches.length > 3) {
      this.toast.show('Attention : le budget a été dépassé !');
    }
  }
}