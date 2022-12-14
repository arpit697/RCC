import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MergeMapComponent } from './merge-map.component';

const routes: Routes = [{ path: '', component: MergeMapComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MergeMapRoutingModule { }
