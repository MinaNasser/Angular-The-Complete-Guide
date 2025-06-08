import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

import { InvestmentResults } from '../Models/investmentResults';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe
  ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
    @Input() investmentResults : InvestmentResults[] = [];
}
