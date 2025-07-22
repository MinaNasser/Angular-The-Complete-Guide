import { Component, Input, ViewEncapsulation } from '@angular/core';

import { image } from '../../Models/image.model';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  // encapsulation: ViewEncapsulation.None,
  // host: {
  //   class: 'dashboard-item',
  // },
})
export class DashboardItemComponent {
  @Input({ required: true }) image: image = {
    url: '',
    alt: 'Image not found',
  };
  @Input({ required: true }) title: string = '';
}
