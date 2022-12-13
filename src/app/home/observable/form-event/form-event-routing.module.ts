import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEventComponent } from './form-event.component';

const routes: Routes = [{ path: '', component: FormEventComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormEventRoutingModule { }
