import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, AfterViewInit {
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
    console.log(
      'ServerStatusComponent initialized with status:',
      this.currentStatus
    );

    setInterval(() => {
      // Simulate changing server status every 2 seconds  (online/offline/unknown)
      const statuses: ('online' | 'offline' | 'unknown')[] = [
        'online',
        'offline',
        'unknown',
      ];
      // Randomly select a status from the array
      //  console.log(`Server status changed to: ${this.currentStatus}`);
      this.currentStatus =
        statuses[Math.floor(Math.random() * statuses.length)];
      // console.log(`Server status changed to: ${this.currentStatus}`);
    }, 5000);
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('ServerStatusComponent view initialized.');
  }
}
