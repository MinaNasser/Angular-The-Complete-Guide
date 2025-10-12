import { Directive, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  queryParams = input('appSafeLink');
  constructor() {
    console.log('SafeLink Directive loaded');
  }
  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = confirm('Are you sure you want to leave this page?');

    if (wantsToLeave) {
      const link = (event.target as HTMLAnchorElement).href;
      window.location.href = link + '?from=' + this.queryParams;
      return;
    } else {
      event.preventDefault();
    }
  }
}
