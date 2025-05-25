import { Component, Input, OnInit } from '@angular/core';
import { User } from '../Models/User';

@Component({
  selector: 'app-Tasks',
  standalone: true,
  templateUrl: './Tasks.component.html',
  styleUrls: ['./Tasks.component.css']
})
export class TasksComponent  {



  // @Input ({required: true}) id! : string ;
  // @Input ({required: true}) avatar! : string ;
  // @Input ({required: true}) name! : string ;

  @Input({required: true}) user :User

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
      name: ''
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
}
