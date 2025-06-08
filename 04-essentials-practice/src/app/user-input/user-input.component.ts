import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InvestmentResultsService } from '../investment-results.service';
import { UserInput } from '../Models/userInput';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<UserInput>();

  userInput : UserInput;

  constructor(private investmentResultsService: InvestmentResultsService) {
    this.userInput = {
      initialInvestment: 10,
      annualInvestment: 1000,
      expectedReturn: 200,
      duration: 5,
    };

  }
  onSubmit() {
    this.investmentResultsService.OnCalculateInvestmentResults(this.userInput);
    // console.log(this.userInput);
    // this.calculate.emit(this.userInput);




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
