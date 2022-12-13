import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomObservableComponent } from './custom-observable.component';

const routes: Routes = [{ path: '', component: CustomObservableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomObservableRoutingModule { }
