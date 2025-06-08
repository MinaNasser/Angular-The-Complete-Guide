import { Component } from '@angular/core';

import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent],
})
export class AppComponent {

  OnCalculateInvestmentResults( userInput: any) {

    const annualData = [];
    let investmentValue =userInput.initialInvestment;

    for (let i = 0; i < userInput.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (userInput.expectedReturn / 100);
      investmentValue += interestEarnedInYear + userInput.annualInvestment;
      const totalInterest =
        investmentValue -
        userInput.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment:userInput.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          userInput.initialInvestment +
          userInput.annualInvestment * year,
      });
    }

    return annualData;
  }
}
