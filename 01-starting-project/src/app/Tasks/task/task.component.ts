import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { TasksService } from '../tasks.service';
import { task } from '../../Models/Task.model';

@Component({
  selector: 'app-task',

  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],

})
export class TaskComponent implements OnInit {

  @Input({required: true}) task! :task;
  @Output() Complete = new EventEmitter<string>();
  constructor( private taskService: TasksService) {
    this.task = {
      id: '',
      userId: '',
      title: '',
      summary: '',
      dueDate: new Date(),
      status: 'pending',
    };
  }




  ngOnInit() {
  }



  onEditTask() {
    console.log(`Task with ID ${this.task.id} edited.`);
  }
  onDeleteTask() {
    // Handle task deletion logic here
    console.log(`Task with ID ${this.task.id} deleted.`);
  }
  onCompleteTask() {
    // Handle task completion logic here
    this.Complete.emit(this.task.id);
    this.task.status = 'completed'; // Update the task status to completed

    console.log(`Task with ID ${this.task.id} completed.`);
  }

}
