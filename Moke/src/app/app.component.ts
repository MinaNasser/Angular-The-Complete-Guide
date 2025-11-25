import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomMultiSelectFormComponent } from './custom-multi-select-form/custom-multi-select-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomMultiSelectFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Moke';
}
