import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDescriptionPlacementContainerComponent } from './provider-description-placement-container.component';

describe('ProviderDescriptionPlacementContainerComponent', () => {
  let component: ProviderDescriptionPlacementContainerComponent;
  let fixture: ComponentFixture<ProviderDescriptionPlacementContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderDescriptionPlacementContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDescriptionPlacementContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
