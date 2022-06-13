import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDescriptionCardAboutTitleComponent } from './provider-description-card-about-title.component';

describe('ProviderDescriptionCardAboutTitleComponent', () => {
  let component: ProviderDescriptionCardAboutTitleComponent;
  let fixture: ComponentFixture<ProviderDescriptionCardAboutTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderDescriptionCardAboutTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDescriptionCardAboutTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
