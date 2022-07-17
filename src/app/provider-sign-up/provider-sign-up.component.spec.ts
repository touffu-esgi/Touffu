import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderSignUpComponent } from './provider-sign-up.component';

describe('ProviderSignUpComponent', () => {
  let component: ProviderSignUpComponent;
  let fixture: ComponentFixture<ProviderSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
