import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {  provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppComponent } from './app.component';

import { TasksComponent } from './Tasks/Tasks.component';
import { TasksService } from './Tasks/tasks.service';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { NewTaskComponent } from './Tasks/new-task/new-task.component';
import { TaskComponent } from './Tasks/task/task.component';
import { CardComponent } from './shared/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    TaskComponent,
    CardComponent,
    NewTaskComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    DatePipe,






  ],
  providers: [TasksService ,
    provideHttpClient(
      withInterceptorsFromDi(),
    ),



   ], // ✅ هنا نضع الخدمات
  bootstrap: [AppComponent]
})
export class AppModule { }
