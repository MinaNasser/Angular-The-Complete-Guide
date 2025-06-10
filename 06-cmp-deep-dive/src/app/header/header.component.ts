import { Component } from '@angular/core';
import { MyButtonComponent } from "../shared/my-button/my-button.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MyButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
