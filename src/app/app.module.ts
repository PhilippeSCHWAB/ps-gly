import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AlimentListComponent } from './aliment-list/aliment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CalculatorComponent,
    AlimentListComponent
  ],
  imports: [
    BrowserModule
        , FormsModule, ReactiveFormsModule,
        RouterModule.forRoot([
          { path: '', component: AlimentListComponent },
          { path: 'calculator', component: CalculatorComponent }
    ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
