import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterRoutingModule } from './filter-routing.module';
import { FilterComponent } from './filter.component';
import { MatCardModule } from '@angular/material/card';

const material = [MatCardModule];

@NgModule({
  declarations: [FilterComponent],
  imports: [CommonModule, FilterRoutingModule , material],
})
export class FilterModule {}
