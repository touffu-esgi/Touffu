import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderAvailabilityPageComponent } from './provider-availability-page.component';

describe('ProviderAvailabilityPageComponent', () => {
  let component: ProviderAvailabilityPageComponent;
  let fixture: ComponentFixture<ProviderAvailabilityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderAvailabilityPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderAvailabilityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
