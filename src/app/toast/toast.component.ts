import { Component, inject } from '@angular/core';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  template: `
    @if (toast.message(); as msg) {
      <div class="toast show position-fixed bottom-0 end-0 m-3 text-bg-danger"
           role="alert" style="z-index: 1080">
        <div class="toast-body">{{ msg }}</div>
      </div>
    }
  `,
})
export class ToastComponent {
  toast = inject(ToastService);
}