import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDescriptionTitleContainerComponent } from './provider-description-title-container.component';

describe('ProviderDescriptionTitleContainerComponent', () => {
  let component: ProviderDescriptionTitleContainerComponent;
  let fixture: ComponentFixture<ProviderDescriptionTitleContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderDescriptionTitleContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDescriptionTitleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
