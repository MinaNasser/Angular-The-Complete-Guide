import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {  provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { share } from 'rxjs';

import { AppComponent } from './app.component';

import { TasksComponent } from './Tasks/Tasks.component';
import { TasksService } from './Tasks/tasks.service';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { NewTaskComponent } from './Tasks/new-task/new-task.component';
import { TaskComponent } from './Tasks/task/task.component';
import { TasksModule } from './Tasks/tasks/tasks.module';
import { CardComponent } from './shared/card/card.component';
import { SharedModule } from './shared/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,


  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    DatePipe,
    SharedModule,
    TasksModule
  ],
  providers: [TasksService ,
    provideHttpClient(
      withInterceptorsFromDi(),
    ),
   ], // ✅ هنا نضع الخدمات
  bootstrap: [AppComponent]
})
export class AppModule { }
