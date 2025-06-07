import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';

import { AppComponent } from './app.component';

import { TasksComponent } from './Tasks/Tasks.component';
import { TasksService } from './Tasks/tasks.service';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { NewTaskComponent } from './Tasks/new-task/new-task.component';
import { TaskComponent } from './Tasks/task/task.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent,

  ],
  providers: [TasksService ,
    provideHttpClient(
      withInterceptorsFromDi(),
    ),



   ], // ✅ هنا نضع الخدمات
  bootstrap: [AppComponent]
})
export class AppModule { }
