import { Component } from '@angular/core';
import { RainbowDirective } from '../directives/rainbow.directive';

@Component({
  selector: 'app-rainbow-demo',
  standalone: true,
  imports: [RainbowDirective],
  template: `<input type="text" appRainbow class="form-control" />`,
})
export class RainbowDemoComponent {}