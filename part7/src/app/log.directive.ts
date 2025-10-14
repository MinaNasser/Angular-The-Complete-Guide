import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host: {
    '(click)': 'onLog()',
  },
})
export class LogDirective {
  constructor(private el: ElementRef) {}

  onLog() {
    console.log('Directive log');
    console.log(this.el.nativeElement.innerText);
  }
}
