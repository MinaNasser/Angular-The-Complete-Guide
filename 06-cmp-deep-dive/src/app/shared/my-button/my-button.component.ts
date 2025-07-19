import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton] , a[appButton] , input[appButton]',
  // button[appButton]
  standalone: true,
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css',
})
export class MyButtonComponent {}
