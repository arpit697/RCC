import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorHandlingCatchRetryComponent } from './error-handling-catch-retry.component';

const routes: Routes = [{ path: '', component: ErrorHandlingCatchRetryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorHandlingCatchRetryRoutingModule { }
