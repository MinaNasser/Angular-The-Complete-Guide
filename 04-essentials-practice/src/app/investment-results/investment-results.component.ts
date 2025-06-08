import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';

import { InvestmentResultsService } from '../investment-results.service';
import { InvestmentResults } from '../Models/investmentResults';

@Component({
  selector: 'app-investment-results',
  
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
    // @Input() investmentResults : InvestmentResults[] = [];
    /**
     *
     */
    private investmentService = inject(InvestmentResultsService);
    investmentResults : InvestmentResults[] = [];
    get InvestmentResults() {

      return this.investmentService.InvestmentResults;
    }
}
