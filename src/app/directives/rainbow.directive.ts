import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appRainbow]',
  standalone: true,
})
export class RainbowDirective {
  @HostBinding('style.color') color = 'black';
  @HostBinding('style.borderColor') borderColor = 'black';

  @HostListener('keyup')
  onKeyUp(): void {
    this.color = this.randomColor();
    this.borderColor = this.randomColor();
  }

  private randomColor(): string {
    const hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
    return '#' + hex;
  }
}