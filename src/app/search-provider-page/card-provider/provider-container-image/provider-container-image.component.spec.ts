import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderContainerImageComponent } from './provider-container-image.component';

describe('ProviderContainerImageComponent', () => {
  let component: ProviderContainerImageComponent;
  let fixture: ComponentFixture<ProviderContainerImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderContainerImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderContainerImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
