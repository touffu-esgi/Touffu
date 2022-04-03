import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindServiceProviderComponent } from './find-service-provider.component';

describe('FindServiceProviderComponent', () => {
  let component: FindServiceProviderComponent;
  let fixture: ComponentFixture<FindServiceProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindServiceProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindServiceProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
