import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToArrayRoutingModule } from './to-array-routing.module';
import { ToArrayComponent } from './to-array.component';

import { MatCardModule } from '@angular/material/card';

const material = [
  MatCardModule
]

@NgModule({
  declarations: [
    ToArrayComponent,
  ],
  imports: [
    CommonModule,
    ToArrayRoutingModule,
    material
  ]
})
export class ToArrayModule { }
