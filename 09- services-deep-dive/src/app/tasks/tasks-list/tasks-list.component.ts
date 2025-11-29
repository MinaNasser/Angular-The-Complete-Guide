import { Component, Signal, signal, computed } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  private selectedFilter = signal<string>('all');
  constructor(private taskService: TasksService) {}
  // tasks: Signal<Task[]> = this.taskService.getTasks();
  tasks = computed(() => {
    switch (this.selectedFilter()) {
      case 'all':
        return this.taskService.getAllTasks();

      case 'open':
        return this.taskService
          .getAllTasks()
          .filter((task) => task.status === 'OPEN');
      case 'in-progress':
        return this.taskService
          .getAllTasks()
          .filter((task) => task.status === 'IN_PROGRESS');
      case 'done':
        return this.taskService
          .getAllTasks()
          .filter((task) => task.status === 'DONE');
      default:
        return this.taskService.getAllTasks();
    }
  });
  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
