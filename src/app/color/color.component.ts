import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  standalone: true,
  template: `
    <h4>Exercice 1 : Couleur du Div</h4>
    <input #colorInput type="text" class="form-control w-50 mb-2"
           placeholder="Tapez une couleur (red, #ff0000...)"
           (input)="color = colorInput.value" />
    <div class="p-5 border rounded mb-2 text-center"
         [style.backgroundColor]="color">
      Je change de couleur
    </div>
    <button class="btn btn-secondary"
            (click)="color = ''; colorInput.value = ''">
      Réinitialiser
    </button>
  `,
})
export class ColorComponent {
  color = '';
}