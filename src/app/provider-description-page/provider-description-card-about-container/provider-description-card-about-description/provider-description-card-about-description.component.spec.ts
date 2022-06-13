import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDescriptionCardAboutDescriptionComponent } from './provider-description-card-about-description.component';

describe('ProviderDescriptionCardAboutDescriptionComponent', () => {
  let component: ProviderDescriptionCardAboutDescriptionComponent;
  let fixture: ComponentFixture<ProviderDescriptionCardAboutDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderDescriptionCardAboutDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDescriptionCardAboutDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
