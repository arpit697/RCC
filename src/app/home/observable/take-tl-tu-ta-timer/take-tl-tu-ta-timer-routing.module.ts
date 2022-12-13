import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TakeTlTuTaTimerComponent } from './take-tl-tu-ta-timer.component';

const routes: Routes = [{ path: '', component: TakeTlTuTaTimerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TakeTlTuTaTimerRoutingModule { }
