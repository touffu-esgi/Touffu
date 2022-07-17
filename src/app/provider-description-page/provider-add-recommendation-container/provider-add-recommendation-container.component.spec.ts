import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderAddRecommendationContainerComponent } from './provider-add-recommendation-container.component';

describe('ProviderAddRecommendationContainerComponent', () => {
  let component: ProviderAddRecommendationContainerComponent;
  let fixture: ComponentFixture<ProviderAddRecommendationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderAddRecommendationContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderAddRecommendationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
