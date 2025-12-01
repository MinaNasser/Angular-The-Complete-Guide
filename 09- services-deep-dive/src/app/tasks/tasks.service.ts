import { LoggingService } from '../logging.service';
import { task } from './../../../../01-starting-project/src/app/Models/Task.model';
import { AddTaskDTO, Task, TaskStatus } from './task.model';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private logs: LoggingService) {}
  private tasks = signal<Task[]>([]);

  addTask(taskData: AddTaskDTO) {
    const newTasks: Task = {
      id: Math.random().toString(),
      ...taskData,
      status: 'OPEN',
    };
    this.tasks.update((oldTasks) => [...oldTasks, newTasks]);
    this.logs.log(
      'Task Added! Title: ' +
        taskData.title +
        ', Description: ' +
        taskData.description
    );
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
    this.logs.log(
      'Task Status Updated! ID: ' + taskId + ', New Status: ' + newStatus
    );
  }
  // ()() to call   the signal and get the value
  getTaskById(taskId: string) {
    this.logs.log('Task Retrieved! ID: ' + taskId);
    return this.tasks
      .asReadonly()()
      .find((task) => task.id === taskId);
  }
  getAllTasks() {
    this.logs.log('All Tasks Retrieved!');
    return this.tasks.asReadonly();
  }
}
