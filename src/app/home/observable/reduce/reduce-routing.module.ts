import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReduceComponent } from './reduce.component';

const routes: Routes = [{ path: '', component: ReduceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReduceRoutingModule { }
