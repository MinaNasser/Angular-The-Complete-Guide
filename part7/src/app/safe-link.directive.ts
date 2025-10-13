import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  queryParams = input('appSafeLink', { alias: 'appSafeLink' });
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
  constructor() {
    console.log('SafeLink Directive loaded');
  }
  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = confirm('Are you sure you want to leave this page?');

    if (wantsToLeave) {
      const link = this.hostElementRef.nativeElement.href;
      window.location.href = link + '?from=' + this.queryParams;
      return;
    } else {
      event.preventDefault();
    }
  }
}
