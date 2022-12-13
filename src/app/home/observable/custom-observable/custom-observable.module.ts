import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomObservableRoutingModule } from './custom-observable-routing.module';
import { CustomObservableComponent } from './custom-observable.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
const material = [
  MatCardModule
]

@NgModule({
  declarations: [
    CustomObservableComponent
  ],
  imports: [
    CommonModule,
    CustomObservableRoutingModule,
    material
  ]
})
export class CustomObservableModule { }
