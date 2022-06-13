import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDescriptionRecommendationsCardAuthorNameComponent } from './provider-description-recommendations-card-author-name.component';

describe('ProviderDescriptionRecommendationsCardAuthorNameComponent', () => {
  let component: ProviderDescriptionRecommendationsCardAuthorNameComponent;
  let fixture: ComponentFixture<ProviderDescriptionRecommendationsCardAuthorNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderDescriptionRecommendationsCardAuthorNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDescriptionRecommendationsCardAuthorNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
