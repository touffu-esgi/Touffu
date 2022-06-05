import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDescriptionCardDetailsImageComponent } from './provider-description-card-details-image.component';

describe('ProviderDescriptionCardDetailsImageComponent', () => {
  let component: ProviderDescriptionCardDetailsImageComponent;
  let fixture: ComponentFixture<ProviderDescriptionCardDetailsImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderDescriptionCardDetailsImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDescriptionCardDetailsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
