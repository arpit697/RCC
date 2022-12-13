import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatListModule} from '@angular/material/list'; 
import { MatCardModule } from '@angular/material/card';

const material = [
  MatCardModule,
  MatListModule
]


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    material
  ]
})
export class HomeModule { }
