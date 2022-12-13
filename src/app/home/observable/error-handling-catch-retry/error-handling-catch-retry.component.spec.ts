import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHandlingCatchRetryComponent } from './error-handling-catch-retry.component';

describe('ErrorHandlingCatchRetryComponent', () => {
  let component: ErrorHandlingCatchRetryComponent;
  let fixture: ComponentFixture<ErrorHandlingCatchRetryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorHandlingCatchRetryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorHandlingCatchRetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
