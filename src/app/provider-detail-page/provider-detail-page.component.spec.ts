import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDetailPageComponent } from './provider-detail-page.component';

describe('UserDetailPageComponent', () => {
  let component: ProviderDetailPageComponent;
  let fixture: ComponentFixture<ProviderDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
