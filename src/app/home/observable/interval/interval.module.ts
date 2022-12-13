import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntervalRoutingModule } from './interval-routing.module';
import { IntervalComponent } from './interval.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

const material = [MatCardModule];

@NgModule({
  declarations: [IntervalComponent],
  imports: [CommonModule, IntervalRoutingModule, material],
})
export class IntervalModule {}
