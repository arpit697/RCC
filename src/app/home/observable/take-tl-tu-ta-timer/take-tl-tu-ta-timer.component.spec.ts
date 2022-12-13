import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeTlTuTaTimerComponent } from './take-tl-tu-ta-timer.component';

describe('TakeTlTuTaTimerComponent', () => {
  let component: TakeTlTuTaTimerComponent;
  let fixture: ComponentFixture<TakeTlTuTaTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeTlTuTaTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeTlTuTaTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
