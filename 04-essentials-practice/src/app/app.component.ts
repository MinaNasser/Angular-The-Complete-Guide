import { Component } from '@angular/core';

import { InvestmentResultsService } from './investment-results.service';

import { InvestmentResults } from './Models/investmentResults';
import { UserInput } from './Models/userInput';
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],

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
