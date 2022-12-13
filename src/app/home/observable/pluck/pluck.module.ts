import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PluckRoutingModule } from './pluck-routing.module';
import { PluckComponent } from './pluck.component';

import {MatListModule} from '@angular/material/list'; 
import { MatCardModule } from '@angular/material/card';

const material = [
  MatCardModule,
  MatListModule
]
@NgModule({
  declarations: [
    PluckComponent
  ],
  imports: [
    CommonModule,
    PluckRoutingModule,
    material
  ]
})
export class PluckModule { }
