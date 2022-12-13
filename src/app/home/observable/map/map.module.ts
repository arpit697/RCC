import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

const material = [MatCardModule];

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, MapRoutingModule, material],
})
export class MapModule {}
