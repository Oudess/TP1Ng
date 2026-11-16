import { Injectable } from '@angular/core';
import { Cv } from '../models/cv.model';

@Injectable({ providedIn: 'root' })
export class CvService {
  private cvs: Cv[] = [
    new Cv(1, 'Chaabane', 'Mahdi', 27, '55667788', 'Designer', ''),
    new Cv(2, 'fkih', 'Mehdi', 25, '99887766', 'Ingénieur réseaux', ''),
    new Cv(3, 'Sellaouti', 'Aymen', 38, '12345678', 'Enseignant', 'https://randomuser.me/api/portraits/men/32.jpg'),
    new Cv(4, 'Sellaouti', 'Skander', 5, '87654321', 'Etudiant', 'https://randomuser.me/api/portraits/men/45.jpg'),
    new Cv(5, 'worker', 'cherche travail', 30, '11223344', 'Développeur', ''),
  ];

  getCvs(): Cv[] {
    return this.cvs;
  }
}
