import {
  AfterViewInit,
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, AfterViewInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  private destroyRef = inject(DestroyRef);
  constructor() {}
  ngOnInit(): void {
    console.log(
      'ServerStatusComponent initialized with status:',
      this.currentStatus
    );
    const interval = setInterval(() => {
      const statuses: ('online' | 'offline' | 'unknown')[] = [
        'online',
        'offline',
        'unknown',
      ];
      this.currentStatus.set(
        statuses[Math.floor(Math.random() * statuses.length)]
      );
    }, 5000);
    this.destroyRef.onDestroy(() => clearInterval(interval));
  }
  ngAfterViewInit(): void {
    console.log('ServerStatusComponent view initialized.');
  }
}

//   ngOnDestroy(): void {
//     //Called once, before the instance is destroyed.
//     //Add 'implements OnDestroy' to the class.
//     console.log('ServerStatusComponent destroyed.');

//     if (this.interval) {
//       clearInterval(this.interval);
//       clearTimeout(this.interval);
//       console.log('Interval cleared.');
//     }
//   }
// }

// const statuses: Array<'online' | 'offline' | 'unknown'> = [
//   'online',
//   'offline',
//   'unknown',
// ];
// this.currentStatus = statuses[Math.floor(Math.random() * statuses.length)];
// // Simulate a server status check
// setTimeout(() => {
//   // Randomly change the status after 2 seconds
//   this.currentStatus =
//     statuses[Math.floor(Math.random() * statuses.length)];
// }, 2000);
