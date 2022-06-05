import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderNameAndPlacementComponent } from './provider-name-and-placement.component';

describe('ProviderNameAndPlacementComponent', () => {
  let component: ProviderNameAndPlacementComponent;
  let fixture: ComponentFixture<ProviderNameAndPlacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderNameAndPlacementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderNameAndPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
