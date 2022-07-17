import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDescriptionCardDetailsAvailabilityComponent } from './provider-description-card-details-availability.component';

describe('ProviderDescriptionCardDetailsAvailabilityComponent', () => {
  let component: ProviderDescriptionCardDetailsAvailabilityComponent;
  let fixture: ComponentFixture<ProviderDescriptionCardDetailsAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderDescriptionCardDetailsAvailabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDescriptionCardDetailsAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
