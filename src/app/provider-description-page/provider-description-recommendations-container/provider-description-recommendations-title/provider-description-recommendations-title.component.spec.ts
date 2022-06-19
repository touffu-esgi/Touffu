import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDescriptionRecommendationsTitleComponent } from './provider-description-recommendations-title.component';

describe('ProviderDescriptionRecommendationsTitleComponent', () => {
  let component: ProviderDescriptionRecommendationsTitleComponent;
  let fixture: ComponentFixture<ProviderDescriptionRecommendationsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderDescriptionRecommendationsTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDescriptionRecommendationsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
