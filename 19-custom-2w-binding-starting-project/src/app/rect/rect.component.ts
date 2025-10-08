import { Component } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  width = 200;
  height = 100;
  color = 'blue';
  backgroundColor = 'white';
  borderRadius = 0;

  onReset() {
    this.width = 200;
    this.height = 100;
    this.color = 'blue';
    this.backgroundColor = 'white';
    this.borderRadius = 0;
  }
}
