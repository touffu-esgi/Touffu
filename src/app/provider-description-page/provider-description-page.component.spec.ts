import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDescriptionPageComponent } from './provider-description-page.component';

describe('ProviderDescriptionPageComponent', () => {
  let component: ProviderDescriptionPageComponent;
  let fixture: ComponentFixture<ProviderDescriptionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderDescriptionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDescriptionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
