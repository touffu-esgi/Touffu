import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDescriptionCardAboutContainerComponent } from './provider-description-card-about-container.component';

describe('ProviderDescriptionCardAboutContainerComponent', () => {
  let component: ProviderDescriptionCardAboutContainerComponent;
  let fixture: ComponentFixture<ProviderDescriptionCardAboutContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderDescriptionCardAboutContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDescriptionCardAboutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
