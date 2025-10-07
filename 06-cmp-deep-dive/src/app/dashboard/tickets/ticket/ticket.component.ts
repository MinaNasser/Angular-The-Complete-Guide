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
  data = input.required<Ticket>();

  close = output<string>();
  detailsVisible = signal(false);

  onToggleDetails() {
    // this.detailsVisible.update((current) => !current);
    this.detailsVisible.set(!this.detailsVisible());
  }
  onMarkAsCompleted() {
    this.close.emit(this.data().id);
  }
}
