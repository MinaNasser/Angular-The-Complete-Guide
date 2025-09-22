import { FormsModule } from '@angular/forms';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  viewChild,
  ViewChild,
} from '@angular/core';
import { MyButtonComponent } from '../../../shared/my-button/my-button.component';
import { ControlComponent } from '../../../shared/control/control.component';
@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [MyButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // Get a reference to the form element
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  private forme = viewChild.required<ElementRef<HTMLFormElement>>('form');

  constructor() {
    console.log('constructor');
  }
  ngOnInit(): void {
    console.log('on init');
    console.log('form in OnInit', this.form?.nativeElement);
  }
  ngAfterViewInit() {
    // this.form?.nativeElement.querySelector('input')?.focus();
    console.log('after view init');
    console.log('form in AfterViewInit', this.forme().nativeElement);
  }

  onSubmit(title: string, ticketText: string): void {
    // const title = titleInput.value;
    console.log('Form submitted', title, ticketText);

    // Clear the input fields
    this.form?.nativeElement.reset();

    this.forme().nativeElement.reset();
  }
  // ngOnDestroy(): void {
  //   console.log('on destroy');
  // }
}
