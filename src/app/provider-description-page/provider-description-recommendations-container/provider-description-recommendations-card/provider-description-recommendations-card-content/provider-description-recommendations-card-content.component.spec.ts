import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDescriptionRecommendationsCardContentComponent } from './provider-description-recommendations-card-content.component';

describe('ProviderDescriptionRecommendationsCardContentComponent', () => {
  let component: ProviderDescriptionRecommendationsCardContentComponent;
  let fixture: ComponentFixture<ProviderDescriptionRecommendationsCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderDescriptionRecommendationsCardContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDescriptionRecommendationsCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
