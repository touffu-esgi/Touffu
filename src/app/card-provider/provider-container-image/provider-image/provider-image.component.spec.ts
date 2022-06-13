import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderImageComponent } from './provider-image.component';

describe('ProviderImageComponent', () => {
  let component: ProviderImageComponent;
  let fixture: ComponentFixture<ProviderImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
