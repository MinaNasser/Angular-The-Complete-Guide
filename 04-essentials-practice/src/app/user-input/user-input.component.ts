import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserInput } from '../Models/userInput';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<UserInput>();

  userInput : UserInput;

  constructor() {
    this.userInput = {
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 0,
      duration: 0,
    };
  }
  onSubmit() {
    this.calculate.emit(this.userInput);
    // this.calculateInvestmentResults();
    // console.log(this.calculateInvestmentResults());
    // console.log(this.userInput);


    this.userInput = {
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 0,
      duration: 0,
    };
  }


}
