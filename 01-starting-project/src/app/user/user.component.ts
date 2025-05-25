import { Component, computed, EventEmitter, input,output, Input, Output } from '@angular/core';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);// Randomly select a user from the dummy users
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({required: true}) id! : string ;
  @Input({required: true}) avatar! : string ;
  @Input({required: true}) name! : string ;
  @Output() select =  new EventEmitter<string>();
  // @Output() selectedUserId = new EventEmitter<string>();

  selected = output<string>()

  selectedUserId =output<string>()
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => `assets/users/${this.avatar()}`); // Dynamically set the image path based on the avatar property





  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  onSelectUserwithSignal() {
    this.selected.emit(this.id); // Emit the selected user ID to the parent component
    // this.selectedUserId.emit(this.id); // Emit the selected user ID to the parent component
    // console.log('Selected user:', this.id);
  }

  onSelectUser() {


    this.select.emit(this.id); // Emit the selected user ID to the parent component
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
}
