import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormEventRoutingModule } from './form-event-routing.module';
import { FormEventComponent } from './form-event.component';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list'; 
import {MatButtonModule} from '@angular/material/button'; 
const material = [
  MatCardModule,
  MatListModule,
  MatButtonModule
]

@NgModule({
  declarations: [
    FormEventComponent
  ],
  imports: [
    CommonModule,
    FormEventRoutingModule,
    material
  ]
})
export class FormEventModule { }
