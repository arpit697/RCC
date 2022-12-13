import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TapRoutingModule } from './tap-routing.module';
import { TapComponent } from './tap.component';
import { MatCardModule } from '@angular/material/card';

const material = [MatCardModule];

@NgModule({
  declarations: [
    TapComponent
  ],
  imports: [
    CommonModule,
    TapRoutingModule,
    material
  ]
})
export class TapModule { }
