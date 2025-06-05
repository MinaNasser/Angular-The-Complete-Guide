import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, Observable, of, tap } from 'rxjs';

import { task } from '../Models/Task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: task[] = []; // Initialize tasks as an empty array
  constructor(
    private http: HttpClient,

  ) { }
  // Method to get all tasks from  file or localStorage


  // Method to save tasks to localStorage
  saveTasks(tasks: task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  // Method to retrieve tasks from localStorage
  getTasks(): Observable<task[]> {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    this.tasks = JSON.parse(storedTasks);
    return of(this.tasks); // 'of' from rxjs
  } else {
    return this.http.get<task[]>('assets/dummy-tasks.json').pipe(
      tap((data) => {
        this.tasks = data;
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }),
      catchError((err) => {
        console.error('Failed to load tasks:', err);
        return of([]); // return empty list in case of error
      })
    );
  }
}




  getUserTasks(userId: string): Observable<task[]> {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      const tasks = JSON.parse(storedTasks);
      return of(tasks.filter((task: task) => task.userId === userId));
    }
    return of([]);
  }
  public addTask(newTask: task): void {
    this.tasks.push(newTask);
    this.saveTasks(this.tasks);
  }

 public deleteTask(taskId: string): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.saveTasks(this.tasks);
  }
  public updateTask(updatedTask: task): void {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      this.saveTasks(this.tasks);
    }
  }

}
