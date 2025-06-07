import { NgModule } from '@angular/core';

import { share } from 'rxjs';

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
  exports: [
    TasksComponent,
  ]
})
export class TasksModule { }
