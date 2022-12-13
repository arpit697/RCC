import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncAwaitRoutingModule } from './async-await-routing.module';
import { AsyncAwaitComponent } from './async-await.component';
import { MatCardModule } from '@angular/material/card';

const material = [
  MatCardModule,
]

@NgModule({
  declarations: [
    AsyncAwaitComponent
  ],
  imports: [
    CommonModule,
    AsyncAwaitRoutingModule,
    material
  ]
})
export class AsyncAwaitModule { }
