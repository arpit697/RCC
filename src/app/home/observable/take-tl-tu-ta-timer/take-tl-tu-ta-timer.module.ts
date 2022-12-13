import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TakeTlTuTaTimerRoutingModule } from './take-tl-tu-ta-timer-routing.module';
import { TakeTlTuTaTimerComponent } from './take-tl-tu-ta-timer.component';
import { MatCardModule } from '@angular/material/card';

const material = [MatCardModule];

@NgModule({
  declarations: [
    TakeTlTuTaTimerComponent
  ],
  imports: [
    CommonModule,
    TakeTlTuTaTimerRoutingModule,
    material
  ]
})
export class TakeTlTuTaTimerModule { }
