import { Component, input, Input } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  // ticket?: Ticket;
  // input ticket?: Ticket
  // @Input() ticket?: Ticket;
  data = input.required<Ticket>();
}
