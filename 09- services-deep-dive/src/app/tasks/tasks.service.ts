import { task } from './../../../../01-starting-project/src/app/Models/Task.model';
import { AddTaskDTO, Task, TaskStatus } from './task.model';
import { Injectable, signal } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
export class TasksService {
  private tasks = signal<Task[]>([]);

  addTask(taskData: AddTaskDTO) {
    const newTasks: Task = {
      id: Math.random().toString(),
      ...taskData,
      status: 'OPEN',
    };
    this.tasks.update((oldTasks) => [...oldTasks, newTasks]);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }
  // ()() to call   the signal and get the value
  getTaskById(taskId: string) {
    return this.tasks
      .asReadonly()()
      .find((task) => task.id === taskId);
  }
  getAllTasks() {
    return this.tasks.asReadonly();
  }
}
