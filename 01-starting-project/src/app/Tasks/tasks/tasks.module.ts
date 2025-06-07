import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksComponent } from '../Tasks.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TaskComponent } from '../task/task.component';
import { SharedModule } from '../../shared/shared/shared.module';



@NgModule({
  declarations: [
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
  ],
  imports: [
    SharedModule,
    DatePipe,
    FormsModule,
    CommonModule
  ],
  exports: [
    TasksComponent,
  ]
})
export class TasksModule { }
