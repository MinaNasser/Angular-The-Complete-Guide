import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent,{
  providers: [
    // Add any providers you need here
    provideHttpClient(),
  ]
}).then(() => {
  console.log('Application bootstrapped successfully');
}).catch((err) => console.error(err));
