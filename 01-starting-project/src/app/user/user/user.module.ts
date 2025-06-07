import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from '../user.component';
import { SharedModule } from '../../shared/shared/shared.module';



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
