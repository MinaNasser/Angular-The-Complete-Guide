import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map, Observable, of, tap } from 'rxjs';

import { task } from '../Models/Task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: task[] = [];
  private apiUrl = 'http://localhost:3000/tasks'; // السيرفر الجديد

  constructor(private http: HttpClient) {}

  // جلب المهام من السيرفر
  getTasks(): Observable<task[]> {
    return this.http.get<task[]>(this.apiUrl).pipe(
      tap((data) => {
        this.tasks = data;
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }),
      catchError((err) => {
        console.error('Failed to load tasks:', err);
        return of([]);
      })
    );
  }

  // إضافة مهمة جديدة
  public addTask(newTask: task): void {
    newTask.id = this.generateUniqueId();
    this.http.post<task>(this.apiUrl, newTask).pipe(
      tap((task) => {
        this.tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }),
      catchError(err => {
        console.error('Failed to add task:', err);
        return of();
      })
    ).subscribe();
  }

  // تحديث مهمة
  public updateTask(updatedTask: task): void {
    const url = `${this.apiUrl}/${updatedTask.id}`;
    this.http.put(url, updatedTask).pipe(
      tap(() => {
        const index = this.tasks.findIndex(t => t.id === updatedTask.id);
        if (index !== -1) {
          this.tasks[index] = updatedTask;
          localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
      }),
      catchError(err => {
        console.error('Failed to update task:', err);
        return of();
      })
    ).subscribe();
  }

  // حذف مهمة
  public deleteTask(taskId: string): void {
    const url = `${this.apiUrl}/${taskId}`;
    this.http.delete(url).pipe(
      tap(() => {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }),
      catchError(err => {
        console.error('Failed to delete task:', err);
        return of();
      })
    ).subscribe();
  }
getUserTasks(userId: string): Observable<task[]> {
  return this.getTasks().pipe(
    tap((tasks: task[]) => this.tasks = tasks),
    catchError(() => of([])),
    map((tasks: task[]) => tasks.filter((task: task) => task.userId === userId))
  );
}


  private generateUniqueId(): string {
    return 't' + (Date.now() % 100000); // ID مؤقت
  }


  private generateNextId(): string {
  const ids = this.tasks.map(t => parseInt(t.id.replace('t', '')) || 0);
  const maxId = ids.length ? Math.max(...ids) : 0;
  return 't' + (maxId + 1);
}


}
