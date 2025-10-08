import { Component, input, Input, output, signal } from '@angular/core';
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
  // {transform: (t) => ({...t})}
  data = input.required<Ticket>();

  close = output();
  detailsVisible = signal(false);
  // isCompleted = signal<boolean>(this.data().status === 'close');

  onToggleDetails() {
    this.detailsVisible.update((wasVisible) => !wasVisible);
    // this.detailsVisible.set(!this.detailsVisible());
  }
  onMarkAsCompleted() {
    this.close.emit();
    // this.isCompleted.set(true);
  }
}
