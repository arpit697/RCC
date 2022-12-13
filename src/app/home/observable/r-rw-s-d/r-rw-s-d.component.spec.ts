import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RRwSDComponent } from './r-rw-s-d.component';

describe('RRwSDComponent', () => {
  let component: RRwSDComponent;
  let fixture: ComponentFixture<RRwSDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RRwSDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RRwSDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
