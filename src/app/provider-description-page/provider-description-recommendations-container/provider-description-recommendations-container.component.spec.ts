import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDescriptionRecommendationsContainerComponent } from './provider-description-recommendations-container.component';

describe('ProviderDescriptionRecommendationsContainerComponent', () => {
  let component: ProviderDescriptionRecommendationsContainerComponent;
  let fixture: ComponentFixture<ProviderDescriptionRecommendationsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderDescriptionRecommendationsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDescriptionRecommendationsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
