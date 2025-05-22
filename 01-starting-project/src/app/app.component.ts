import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './Tasks/Tasks.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, UserComponent,FormsModule ,CommonModule,TasksComponent]
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId: string = 'u1';

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
    console.log('Selected user:', this.selectedUserId);
  }
}
