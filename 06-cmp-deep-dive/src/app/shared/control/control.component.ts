import {
  Component,
  HostBinding,
  HostListener,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '[class.control--required]': 'label.required',
    '[class.control--invalid]': 'label.invalid',
    // '(click)': 'onClick()',
  },
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  @HostListener('click') onClick(): void {
    console.log('Control clicked');
  }

  label = input.required<string>();
  // onClick(): void {
  //   console.log('click');
  // }
}
