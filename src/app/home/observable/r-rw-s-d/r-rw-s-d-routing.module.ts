import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RRwSDComponent } from './r-rw-s-d.component';

const routes: Routes = [{ path: '', component: RRwSDComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RRwSDRoutingModule { }
