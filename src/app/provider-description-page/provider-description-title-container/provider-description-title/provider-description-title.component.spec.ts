import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDescriptionTitleComponent } from './provider-description-title.component';

describe('ProviderDescriptionTitleComponent', () => {
  let component: ProviderDescriptionTitleComponent;
  let fixture: ComponentFixture<ProviderDescriptionTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderDescriptionTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDescriptionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
