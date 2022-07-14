import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCheckErrorComponent } from './health-check-error.component';

describe('HealthCheckErrorComponent', () => {
  let component: HealthCheckErrorComponent;
  let fixture: ComponentFixture<HealthCheckErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthCheckErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthCheckErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
