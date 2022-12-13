import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DtDucComponent } from './dt-duc.component';

const routes: Routes = [{ path: '', component: DtDucComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DtDucRoutingModule { }
