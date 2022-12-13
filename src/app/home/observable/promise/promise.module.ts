import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromiseRoutingModule } from './promise-routing.module';
import { PromiseComponent } from './promise.component';

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

const material = [MatCardModule];

@NgModule({
  declarations: [PromiseComponent],
  imports: [CommonModule, PromiseRoutingModule, material],
})
export class PromiseModule {}
