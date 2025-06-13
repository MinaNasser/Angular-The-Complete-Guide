import { Component } from '@angular/core';

import { MyButtonComponent } from "../../../shared/my-button/my-button.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [MyButtonComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
   

}
