import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { TasksService } from '../tasks.service';
import { task } from '../../Models/Task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent implements OnInit {
  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.inputTask = {
      id: '',
      userId: this.userId,
      title: '',
      summary: '',
      dueDate: '',
      status: 'pending',
    };
  }
  @Input() userId!: string;
  @Output() Cancel = new EventEmitter();
// make task id incremental after each task creation in the list last task id is 't15' so next task id should be 't16' and so on
  private nextId:string = 't16';
  @Output() TaskCreated = new EventEmitter<task>();
  inputTask!: task;

  onCreateTask() {
    this.TaskCreated.emit(this.inputTask);

    this.inputTask.id = this.nextId;
    this.nextId = String(Number(this.nextId.slice(1)) + 1);
    this.inputTask.title = this.inputTask.title.trim();
    this.inputTask.summary = this.inputTask.summary.trim();
    this.inputTask.dueDate = this.inputTask.dueDate;
    this.inputTask.status = 'pending';
    this.inputTask.userId = this.userId;

    this.taskService.addTask(this.inputTask);
  }



  onCancel() {
    this.Cancel.emit();
  }
}
