import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ttc',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  template: `
    <h3 class="fw-light mb-3">TTC Calculator</h3>
    <div class="row g-2 mb-3">
      <div class="col">
        <input type="number" class="form-control" min="0" [(ngModel)]="prixHT" />
        <small class="text-muted">Prix HT</small>
      </div>
      <div class="col">
        <input type="number" class="form-control" min="0" [(ngModel)]="quantite" />
        <small class="text-muted">Quantité</small>
      </div>
      <div class="col">
        <input type="number" class="form-control" min="0" [(ngModel)]="tva" />
        <small class="text-muted">TVA (%)</small>
      </div>
    </div>
    <div class="row g-0 small">
  <div class="col"><div class="alert alert-info rounded-0 mb-0">
    Prix unitaire TTC : {{ prixUnitaireTTC | currency: 'USD' }}</div></div>
  <div class="col"><div class="alert alert-success rounded-0 mb-0">
    Prix total TTC : {{ totalTTC | currency: 'USD' }}</div></div>
  <div class="col"><div class="alert alert-danger rounded-0 mb-0">
    Discount : {{ remise | currency: 'USD' }}</div></div>
</div>
  `,
})
export class TtcComponent {
  prixHT = 0;
  quantite = 1;
  tva = 18;

  get prixUnitaireTTC(): number {
    return this.prixHT * (1 + this.tva / 100);
  }
  get tauxRemise(): number {
    if (this.quantite > 15) return 0.3;
    if (this.quantite > 10) return 0.2;
    return 0;
  }
  get remise(): number {
    return this.prixUnitaireTTC * this.quantite * this.tauxRemise;
  }
  get totalTTC(): number {
    return this.prixUnitaireTTC * this.quantite - this.remise;
  }
}