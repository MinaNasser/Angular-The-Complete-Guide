import { Component, EventEmitter, Output } from '@angular/core';
import { task } from '../../Models/Task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() Cancel = new EventEmitter();
  inputTask: task = {
    id: '',
    userId: '',
    title: '',
    summary: '',
    dueDate: '',
    status: 'pending',
  };

  onCancel() {
    this.Cancel.emit();
  }
}
