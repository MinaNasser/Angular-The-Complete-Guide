import {
  AfterContentInit,
  Component,
  contentChild,
  ContentChild,
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
    // console.log(this.el);
    // console.log(this.control());
  }

  label = input.required<string>();

  private el = inject(ElementRef<HTMLElement>);
  // private el = inject(ElementRef<HTMLElement>).nativeElement;

  // get label(): HTMLLabelElement | null {
  //   return this.el.nativeElement.querySelector('label');
  // }
  // @ContentChild('input') private inputRef?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;

  private control =
    contentChild<ElementRef<HTMLElement | HTMLTextAreaElement>>('input');
  private labelRef = contentChild<ElementRef<HTMLLabelElement>>('label');

  // ngAfterContentInit(): void {
  //   console.log('After content init');
  //   console.log('labelRef', this.labelRef);
  // }
  // @HostBinding('class.control--required')
  // get isRequired(): boolean {
  //   return !!this.labelRef?.nativeElement.classList.contains('required');
  // }
  // @HostBinding('class.control--invalid')
  // get isInvalid(): boolean {
  //   return !!this.labelRef?.nativeElement.classList.contains('invalid');
  // }

  // onClick(): void {
  //   console.log('click');
  // }
}
