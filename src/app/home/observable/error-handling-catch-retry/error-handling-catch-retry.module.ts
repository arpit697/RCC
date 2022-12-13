import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorHandlingCatchRetryRoutingModule } from './error-handling-catch-retry-routing.module';
import { ErrorHandlingCatchRetryComponent } from './error-handling-catch-retry.component';


@NgModule({
  declarations: [
    ErrorHandlingCatchRetryComponent
  ],
  imports: [
    CommonModule,
    ErrorHandlingCatchRetryRoutingModule
  ]
})
export class ErrorHandlingCatchRetryModule { }
