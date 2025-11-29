import { Component, Signal, signal } from '@angular/core';

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
  selectedFilter = signal<string>('all');
  constructor(private taskService: TasksService) {}
  tasks: Signal<Task[]> = this.taskService.getTasks();

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
