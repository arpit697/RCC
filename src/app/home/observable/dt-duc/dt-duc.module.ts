import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DtDucRoutingModule } from './dt-duc-routing.module';
import { DtDucComponent } from './dt-duc.component';


@NgModule({
  declarations: [
    DtDucComponent
  ],
  imports: [
    CommonModule,
    DtDucRoutingModule
  ]
})
export class DtDucModule { }
