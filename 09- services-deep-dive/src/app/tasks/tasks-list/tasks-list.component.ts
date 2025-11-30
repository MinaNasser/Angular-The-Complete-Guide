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
    const allTasks = this.taskService.getAllTasks()(); // احصل على ال Array

    switch (this.selectedFilter()) {
      case 'all':
        return allTasks;

      case 'open':
        return allTasks.filter((task) => task.status === 'OPEN');

      case 'in-progress':
        return allTasks.filter((task) => task.status === 'IN_PROGRESS');

      case 'done':
        return allTasks.filter((task) => task.status === 'DONE');

      default:
        return allTasks;
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
