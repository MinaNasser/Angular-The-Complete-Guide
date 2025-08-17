import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'unknown';

  constructor() {}

  ngOnInit(): void {
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
    setInterval(() => {
      // Simulate changing server status every 2 seconds  (online/offline/unknown)
      const statuses: ('online' | 'offline' | 'unknown')[] = [
        'online',
        'offline',
        'unknown',
      ];
      this.currentStatus =
        statuses[Math.floor(Math.random() * statuses.length)];
      // console.log(`Server status changed to: ${this.currentStatus}`);
    }, 5000);
  }
}
