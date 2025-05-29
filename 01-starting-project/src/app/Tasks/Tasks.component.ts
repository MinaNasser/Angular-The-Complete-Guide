import { Component, Input, OnInit } from '@angular/core';
import { User } from '../Models/User.model';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { task } from '../Models/Task.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './Tasks.component.html',
  styleUrls: ['./Tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks:task[] = []; // Initialize tasks as an empty array
  @Input({required: true}) user :User;
  isAddingTask: boolean = false;
  ngOnInit() {
  const storedTasks = localStorage.getItem('tasks');

  if (storedTasks) {
    this.tasks = JSON.parse(storedTasks);
  } else {
    this.http.get<task[]>('assets/dummy-tasks.json').subscribe({
      next: (data) => {
        this.tasks = data;
        // Optional: حفظها في localStorage لو حبيت
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      },
      error: (err) => {
        console.error('Failed to load tasks:', err);
      }
    });
  }
}


  // @Input ({required: true}) id! : string ;
  // @Input ({required: true}) avatar! : string ;
  // @Input ({required: true}) name! : string ;

  // {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // } ; // Assuming user is an object with properties like id, avatar, name
  constructor(private http: HttpClient) {
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
  onTaskCreated(newTask: any) {
  newTask.userId = this.user.id;
  this.tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(this.tasks)); // ✅ مهم
  this.isAddingTask = false;
}

}
