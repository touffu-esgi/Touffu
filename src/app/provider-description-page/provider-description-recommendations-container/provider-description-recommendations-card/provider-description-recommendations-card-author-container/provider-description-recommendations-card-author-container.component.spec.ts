import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDescriptionRecommendationsCardAuthorContainerComponent } from './provider-description-recommendations-card-author-container.component';

describe('ProviderDescriptionRecommendationsCardAuthorContainerComponent', () => {
  let component: ProviderDescriptionRecommendationsCardAuthorContainerComponent;
  let fixture: ComponentFixture<ProviderDescriptionRecommendationsCardAuthorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderDescriptionRecommendationsCardAuthorContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDescriptionRecommendationsCardAuthorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
