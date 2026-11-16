import { Injectable, inject } from '@angular/core';
import { Cv } from '../models/cv.model';
import { ToastService } from './toast.service';

@Injectable({ providedIn: 'root' })
export class EmbaucheService {
  private toast = inject(ToastService);
  private embauches: Cv[] = [];
  private readonly budget = 3;

  getEmbauches(): Cv[] {
    return this.embauches;
  }

  embaucher(cv: Cv): void {
    const fullName = `${cv.firstname} ${cv.name}`;
    if (this.embauches.includes(cv)) {
      this.toast.warning(`${fullName} est déjà pré embauché`);
      return;
    }
    this.embauches.push(cv);
    this.toast.success(`${fullName} a été pré embauché avec succès`);
    if (this.embauches.length > this.budget) {
      this.toast.error('Attention : le budget a été dépassé !');
    }
  }
}
