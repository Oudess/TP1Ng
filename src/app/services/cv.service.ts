import { Injectable } from '@angular/core';
import { Cv } from '../models/cv.model';

@Injectable({ providedIn: 'root' })
export class CvService {
  private cvs: Cv[] = [
    new Cv(1, 'Sellaouti', 'Aymen', 38, '12345678', 'Enseignant', 'https://randomuser.me/api/portraits/men/32.jpg'),
    new Cv(2, 'Sellaouti', 'Skander', 5, '87654321', 'Etudiant', 'https://randomuser.me/api/portraits/men/45.jpg'),
    new Cv(3, 'Worker', 'Cherche', 30, '11223344', 'Développeur', 'https://randomuser.me/api/portraits/women/12.jpg'),
    new Cv(4, 'Chaabane', 'Mahdi', 27, '55667788', 'Designer', 'https://randomuser.me/api/portraits/men/65.jpg'),
    new Cv(5, 'Fkih', 'Mehdi', 25, '99887766', 'Ingénieur réseaux', 'https://randomuser.me/api/portraits/men/22.jpg'),
  ];

  getCvs(): Cv[] {
    return this.cvs;
  }
}