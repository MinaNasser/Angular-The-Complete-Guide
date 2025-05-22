import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Tasks',
  standalone: true,
  templateUrl: './Tasks.component.html',
  styleUrls: ['./Tasks.component.css']
})
export class TasksComponent  {


  
  @Input ({required: true}) id! : string ;
  @Input ({required: true}) avatar! : string ;
  @Input ({required: true}) name! : string ;
  constructor() { }
  get imagePath() {
    return `assets/users/${this.avatar}`;
  }
  onSelectUser() {
    // this.selectedUserId.emit(this.id); // Emit the selected user ID to the parent component
    // console.log('Selected user:', this.id);
  }
}
