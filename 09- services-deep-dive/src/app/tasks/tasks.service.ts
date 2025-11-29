import { AddTaskDTO, Task } from './task.model';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
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
  getTasks() {
    return this.tasks;
  }
}
