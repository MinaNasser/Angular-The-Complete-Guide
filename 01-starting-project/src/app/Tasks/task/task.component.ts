import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'zone.js/lib/zone-impl';
import { task } from '../../Models/Task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input({required: true}) task! :task;
  constructor() {
    this.task = {
      id: '',
      userId: '',
      title: '',
      summary: '',
      dueDate: ''
    };
  }

  ngOnInit() {
  }
  onEditTask() {
    // Handle task editing logic here
    console.log(`Task with ID ${this.task.id} edited.`);
  }
  onDeleteTask() {
    // Handle task deletion logic here
    console.log(`Task with ID ${this.task.id} deleted.`);
  }
  onCompleteTask() {
    // Handle task completion logic here
    console.log(`Task with ID ${this.task.id} completed.`);
  }

}
