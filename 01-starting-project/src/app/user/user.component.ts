import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);// Randomly select a user from the dummy users
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  private selectedUser= DUMMY_USERS[randomIndex]; // Select a random user from the dummy users
  get user() {
    return this.selectedUser;
  }
  get imagePath() {
    return `assets/users/${this.selectedUser.avatar}`;
  }
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex]; // Select a random user from the dummy users
    console.log('Selected user:', this.selectedUser);
  }
}
