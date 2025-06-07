// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideHttpClient } from '@angular/common/http';

// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent,{
//   providers: [
//     // Add any providers you need here
//     provideHttpClient(),
//   ]
// }).then(() => {
//   console.log('Application bootstrapped successfully');
// }).catch((err) => console.error(err));


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


