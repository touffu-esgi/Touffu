import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDescriptionRecommendationsCardAuthorImageComponent } from './provider-description-recommendations-card-author-image.component';

describe('ProviderDescriptionRecommendationsCardAuthorImageComponent', () => {
  let component: ProviderDescriptionRecommendationsCardAuthorImageComponent;
  let fixture: ComponentFixture<ProviderDescriptionRecommendationsCardAuthorImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderDescriptionRecommendationsCardAuthorImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDescriptionRecommendationsCardAuthorImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
