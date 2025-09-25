import { Ticket } from './ticket.model';
import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  // TypeScript & Type Models Repetition
  tickets: Ticket[] = [];

  OnAddTicket(event: { title: string; ticketText: string }) {
    const newTicket: Ticket = {
      id: Math.random().toString(),
      title: event.title,
      request: event.ticketText,
      status: 'open',
    };
    this.tickets.push(newTicket);
  }
}
