import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReduceRoutingModule } from './reduce-routing.module';
import { ReduceComponent } from './reduce.component';


@NgModule({
  declarations: [
    ReduceComponent
  ],
  imports: [
    CommonModule,
    ReduceRoutingModule
  ]
})
export class ReduceModule { }
