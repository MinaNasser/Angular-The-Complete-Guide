import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule ,CommonModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  userInput = {
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  };
  onSubmit() {
    this.calculateInvestmentResults();
    // console.log(this.calculateInvestmentResults());
    // console.log(this.userInput);
  }

  calculateInvestmentResults() {
    const annualData = [];
    let investmentValue = this.userInput.initialInvestment;

    for (let i = 0; i < this.userInput.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * ( this.userInput.expectedReturn / 100);
      investmentValue += interestEarnedInYear +  this.userInput.annualInvestment;
      const totalInterest =
        investmentValue -   this.userInput.annualInvestment * year -  this.userInput.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment:  this.userInput.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:  this.userInput.initialInvestment +    this.userInput.annualInvestment * year,
      });
    }

    return annualData;
  }
}
