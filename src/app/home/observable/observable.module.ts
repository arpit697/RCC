import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from './observable-routing.module';
import { ObservableComponent } from './observable.component';
import {MatCardModule} from '@angular/material/card'; 
const material = [
  MatCardModule
]

@NgModule({
  declarations: [
    ObservableComponent
  ],
  imports: [
    CommonModule,
    ObservableRoutingModule,
    material
  ]
})
export class ObservableModule { }
