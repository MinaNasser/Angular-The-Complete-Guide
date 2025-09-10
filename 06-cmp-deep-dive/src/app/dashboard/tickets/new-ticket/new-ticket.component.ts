import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { MyButtonComponent } from '../../../shared/my-button/my-button.component';
import { ControlComponent } from '../../../shared/control/control.component';
@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [MyButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  onSubmit(titleInput: HTMLInputElement): void {
    console.log('Form submitted', titleInput.value);
    // Clear the input field
    titleInput.value = '';
    // Focus the title input
    titleInput.focus();
  }
}
