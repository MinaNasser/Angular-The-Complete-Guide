import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserInputComponent } from '../user-input.component';



@NgModule({
  declarations: [
    UserInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UserInputComponent
  ]
})
export class UserInputModule { }
