import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfFromRoutingModule } from './of-from-routing.module';
import { OfFromComponent } from './of-from.component';
import { MatCardModule } from '@angular/material/card';

const material = [
  MatCardModule
]

@NgModule({
  declarations: [
    OfFromComponent
  ],
  imports: [
    CommonModule,
    OfFromRoutingModule,
    material
  ]
})
export class OfFromModule { }
