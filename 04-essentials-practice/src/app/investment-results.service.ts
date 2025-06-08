import { Injectable } from '@angular/core';

import { InvestmentResults } from './Models/investmentResults';
import { UserInput } from './Models/userInput';

@Injectable({
  providedIn: 'root'
})
export class InvestmentResultsService {
  InvestmentResults: InvestmentResults [] = [];
  constructor() { }


  OnCalculateInvestmentResults( userInput: UserInput) {

    let investmentValue =userInput.initialInvestment;

    for (let i = 0; i < userInput.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (userInput.expectedReturn / 100);
      investmentValue += interestEarnedInYear + userInput.annualInvestment;
      const totalInterest =
        investmentValue -
        userInput.initialInvestment;
      this.InvestmentResults.push( {
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

    return this.InvestmentResults ;
  }
}
