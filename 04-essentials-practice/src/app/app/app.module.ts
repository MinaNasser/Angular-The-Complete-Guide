import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '../app.component';
import { HeaderComponent } from '../header/header.component';
import { InvestmentResultsComponent } from '../investment-results/investment-results.component';
import { UserInputModule } from '../user-input/user-input/user-input.module';



@NgModule({
  declarations: [
    AppComponent,
    InvestmentResultsComponent,
    HeaderComponent,


  ],
  imports: [
    BrowserModule,
    UserInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
