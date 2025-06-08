import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '../app.component';
import { HeaderComponent } from '../header/header.component';
import { InvestmentResultsComponent } from '../investment-results/investment-results.component';
import { UserInputComponent } from '../user-input/user-input.component';



@NgModule({
  declarations: [
    AppComponent,
    InvestmentResultsComponent,
    HeaderComponent,
    UserInputComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    // CurrencyPipe,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
