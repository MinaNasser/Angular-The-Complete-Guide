import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { TasksService } from '../tasks.service';
import { task } from '../../Models/Task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  @Input() userId!: string;
  @Output() Cancel = new EventEmitter<void>();
  @Output() TaskCreated = new EventEmitter<task>();

  inputTask!: task;

  constructor(private taskService: TasksService) {}

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

  onCreateTask() {
    this.inputTask.userId = this.userId;

    this.taskService.addTask(this.inputTask); // الإضافة للسيرفر

    // لو حابب تنتظر التأكيد من السيرفر، اعملها بالشكل ده:
    // this.taskService.addTask(this.inputTask).subscribe((createdTask) => {
    //   this.TaskCreated.emit(createdTask); // بلغ TasksComponent بالمهمة الجديدة
    // });

    this.TaskCreated.emit(this.inputTask);
  }

  onCancel() {
    this.Cancel.emit();
  }
}
