import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderPriceComponent } from './provider-price.component';

describe('ProviderPriceComponent', () => {
  let component: ProviderPriceComponent;
  let fixture: ComponentFixture<ProviderPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
