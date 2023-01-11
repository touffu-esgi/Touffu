import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDescriptionRecommendationsCardComponent } from './provider-description-recommendations-card.component';

describe('ProviderDescriptionRecommendationsCardComponent', () => {
  let component: ProviderDescriptionRecommendationsCardComponent;
  let fixture: ComponentFixture<ProviderDescriptionRecommendationsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderDescriptionRecommendationsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDescriptionRecommendationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
