import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id: number;
  type: ToastType;
  message: string;
}

/** Minimal toastr-like service: stacked toasts in the top-right corner. */
@Injectable({ providedIn: 'root' })
export class ToastService {
  readonly toasts = signal<Toast[]>([]);
  private nextId = 0;

  success(message: string): void { this.show(message, 'success'); }
  error(message: string): void { this.show(message, 'error'); }
  warning(message: string): void { this.show(message, 'warning'); }
  info(message: string): void { this.show(message, 'info'); }

  show(message: string, type: ToastType = 'info', duration = 4000): void {
    const toast: Toast = { id: this.nextId++, type, message };
    this.toasts.update((list) => [...list, toast]);
    setTimeout(() => this.remove(toast.id), duration);
  }

  remove(id: number): void {
    this.toasts.update((list) => list.filter((t) => t.id !== id));
  }
}
