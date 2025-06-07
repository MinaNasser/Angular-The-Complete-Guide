import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { TasksService } from '../tasks.service';
import { task } from '../../Models/Task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input({ required: true }) task!: task;
  @Output() Complete = new EventEmitter<string>();
  @Output() Delete = new EventEmitter<string>();
  @Output() Edit = new EventEmitter<string>();

  constructor(private taskService: TasksService) {}

  ngOnInit() {}

  onEditTask() {
    // ممكن تفتح نافذة تعديل أو ترسل الحدث للأب
    this.Edit.emit(this.task.id);
    console.log(`Task with ID ${this.task.id} edited.`);
  }

  onDeleteTask() {
    // حذف المهمة عبر السيرفس ثم تبليغ الأب للتحديث
    this.taskService.deleteTask(this.task.id);
    this.Delete.emit(this.task.id);
    console.log(`Task with ID ${this.task.id} deleted.`);
  }

  onCompleteTask() {
    // تحديث حالة المهمة الى completed
    this.task.status = 'completed';
    this.taskService.updateTask(this.task);
    this.Complete.emit(this.task.id);
    console.log(`Task with ID ${this.task.id} completed.`);
  }
}
