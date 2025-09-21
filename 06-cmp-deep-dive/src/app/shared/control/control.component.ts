import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
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

  // host: {
  //   class: 'control',
  //   '[class.control--required]': 'label.required',
  //   '[class.control--invalid]': 'label.invalid',
  // },
  host: {
    class: 'control',
    '[class.control--required]': 'label.required',
    '[class.control--invalid]': 'label.invalid',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  @HostListener('click') onClick(): void {
    console.log('Control clicked');
  }

  label = input.required<string>();
  private el = inject(ElementRef<HTMLElement>);

  // onClick(): void {
  //   console.log('click');
  // }
}
