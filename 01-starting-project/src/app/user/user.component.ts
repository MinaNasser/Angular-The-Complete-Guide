import { Component, EventEmitter,output, Input, Output } from '@angular/core';

import { User } from '../Models/User.model';


// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);// Randomly select a user from the dummy users
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({required: true}) id! : string ;
  // @Input({required: true}) avatar! : string ;
  // @Input({required: true}) name! : string ;
  @Input({required: true}) user: User; // Assuming user is an object with properties like id, avatar, name
  @Output() select =  new EventEmitter<string>();

  @Input({required: true}) isSelected!: boolean; // Assuming id is a string
  // @Output() selectedUserId = new EventEmitter<string>();

  selected = output<string>()

  selectedUserId =output<string>()
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => `assets/users/${this.avatar()}`); // Dynamically set the image path based on the avatar property





  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUserwithSignal() {
    this.selected.emit(this.user.id); // Emit the selected user ID to the parent component
    // this.selectedUserId.emit(this.id); // Emit the selected user ID to the parent component
    // console.log('Selected user:', this.id);
  }

  onSelectUser() {


    this.select.emit(this.user.id); // Emit the selected user ID to the parent component
    // this.selectedUserId.emit(this.id); // Emit the selected user ID to the parent component


    // this.selectedUserId.emit(this.id); // Emit the selected user ID to the parent component
    // console.log('Selected user:', this.id);
  }
  //  selectedUser= signal(DUMMY_USERS[randomIndex]); // Select a random user from the dummy users
  // imagePath =  computed(( ) => `assets/users/${this.selectedUser().avatar}`);
  //  get user() {
  //   return this.selectedUser;
  // }

  // // get imagePath() {
  // //   return `assets/users/${this.selectedUser().avatar}`;
  // // }
  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set( DUMMY_USERS[randomIndex]); // Select a random user from the dummy users
  //   console.log('Selected user:', this.selectedUser);
  // }


  constructor() {
    // Initialization logic can go here if needed
    this.user = {
      id: '',
      avatar: '',
      name: ''
    };
  }
}
