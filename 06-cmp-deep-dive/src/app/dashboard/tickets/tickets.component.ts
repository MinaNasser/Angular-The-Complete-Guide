import { Ticket } from './ticket.model';
import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
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
  onCloseTicket(ticketId: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === ticketId) {
        return { ...ticket, status: 'close' };
      }
      return ticket;
    });
  }
}
