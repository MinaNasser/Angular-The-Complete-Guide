import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { task } from '../../Models/Task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent implements OnInit {
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
  }



  onCancel() {
    this.Cancel.emit();
  }
}
