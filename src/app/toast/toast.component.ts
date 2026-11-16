import { Component, inject } from '@angular/core';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  styles: [`
    .toast-container { position: fixed; top: 12px; right: 12px; z-index: 1080; width: 300px; }
    .toastr {
      display: flex; align-items: center; gap: 12px;
      margin-bottom: 6px; padding: 15px; border-radius: 3px;
      color: #fff; font-size: .85rem; line-height: 1.3;
      box-shadow: 0 0 12px #999; opacity: .9; cursor: pointer;
      animation: slide-in .3s ease-out;
    }
    .toastr:hover { opacity: 1; box-shadow: 0 0 12px #000; }
    .toastr svg { flex: 0 0 24px; }
    .success { background-color: #51a351; }
    .error   { background-color: #bd362f; }
    .warning { background-color: #f89406; }
    .info    { background-color: #2f96b4; }
    @keyframes slide-in { from { opacity: 0; transform: translateX(40px); } }
  `],
  template: `
    <div class="toast-container">
      @for (t of toast.toasts(); track t.id) {
        <div class="toastr {{ t.type }}" role="alert" (click)="toast.remove(t.id)">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"
               stroke-linecap="round" stroke-linejoin="round">
            @switch (t.type) {
              @case ('success') { <path d="M4 12l5 5L20 6" /> }
              @case ('error') { <path d="M6 6l12 12M18 6L6 18" /> }
              @default { <path d="M12 5v9M12 19v.5" /> }
            }
          </svg>
          <span>{{ t.message }}</span>
        </div>
      }
    </div>
  `,
})
export class ToastComponent {
  toast = inject(ToastService);
}
