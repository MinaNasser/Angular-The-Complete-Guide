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
    console.log('after view init');
    console.log('form in AfterViewInit', this.forme().nativeElement);
  }

  onSubmit(title: string, ticketText: string): void {
    console.log('Form submitted', title, ticketText);
    this.form?.nativeElement.reset();
    this.forme().nativeElement.reset();
  }
}
