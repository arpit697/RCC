import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RRwSDRoutingModule } from './r-rw-s-d-routing.module';
import { RRwSDComponent } from './r-rw-s-d.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'; 
const material = [MatCardModule , MatButtonModule];

@NgModule({
  declarations: [
    RRwSDComponent
  ],
  imports: [
    CommonModule,
    RRwSDRoutingModule,
    material
  ]
})
export class RRwSDModule { }
