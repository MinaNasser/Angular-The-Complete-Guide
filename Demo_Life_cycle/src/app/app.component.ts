import { Component } from '@angular/core';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LifecycleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  lifecycleComponentIsVisible = false;
  onToggleLifecycleComponentVisibility() {
    this.lifecycleComponentIsVisible = !this.lifecycleComponentIsVisible;
  }
  lifecycleInputText =
    'Some Random Number : ' + (Math.random() * 100).toFixed(2) + '';

  onChangeLifecycleInputText() {
    this.lifecycleInputText =
      'Some Random Number : ' + (Math.random() * 100).toFixed(2) + '';
  }
}
