import { Component } from '@angular/core';

import { InvestmentResultsService } from './investment-results.service';

import { InvestmentResults } from './Models/investmentResults';
import { UserInput } from './Models/userInput';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  InvestmentResults: InvestmentResults[] = [];
  /**
   *
   */
  constructor(
    private investmentResultsService: InvestmentResultsService
  ) {
  }
  onCalculateInvestmentResults(userInput: UserInput) {
    this.InvestmentResults = this.investmentResultsService.OnCalculateInvestmentResults(userInput);
  }

}
