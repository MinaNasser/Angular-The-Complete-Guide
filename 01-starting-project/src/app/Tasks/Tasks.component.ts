import { Component, Input, OnInit } from '@angular/core';
import { User } from '../Models/User.model';
import { TaskComponent } from './task/task.component';
import { Dummy_Tasks } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-Tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './Tasks.component.html',
  styleUrls: ['./Tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks = Dummy_Tasks;
  @Input({required: true}) user :User;
  isAddingTask: boolean = false;
  ngOnInit() {
    const storedTasks = localStorage.getItem('tasks');
    this.tasks = storedTasks ? JSON.parse(storedTasks) : Dummy_Tasks;
  }

  // @Input ({required: true}) id! : string ;
  // @Input ({required: true}) avatar! : string ;
  // @Input ({required: true}) name! : string ;

  // {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // } ; // Assuming user is an object with properties like id, avatar, name
  constructor() {
    // Initialization logic can go here if needed
    this.user = {
      id: '',
      avatar: '',
      name: '',
    };
  }
  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }
  onSelectUser() {
    // alkdka
    // ckmzzxkc
    // ';ckzcmcZSc
    // ADsmd'
    // this.selectedUserId.emit(this.id); // Emit the selected user ID to the parent component
    // console.log('Selected user:', this.id);
  }
  onTaskCompleted(taskId: string) {
    this.tasks = this.tasks.map((t) =>
      t.id === taskId ? { ...t, status: 'completed' } : t
    );
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  onTaskDeleted(taskId: string) {
    // Handle task deletion logic here
    console.log(`Task with ID ${taskId} deleted.`);
  }
  onTaskEdited(taskId: string) {
    // Handle task editing logic here
    console.log(`Task with ID ${taskId} edited.`);
  }
  get filteredTasks() {
    return this.tasks.filter((task) => task.userId === this.user.id);
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
