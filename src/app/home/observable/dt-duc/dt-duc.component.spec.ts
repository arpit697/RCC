import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtDucComponent } from './dt-duc.component';

describe('DtDucComponent', () => {
  let component: DtDucComponent;
  let fixture: ComponentFixture<DtDucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtDucComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtDucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
