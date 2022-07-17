import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementDetailComponentProvider } from './agreement-detail-component-provider.component';

describe('AgreementDetailComponent', () => {
  let component: AgreementDetailComponentProvider;
  let fixture: ComponentFixture<AgreementDetailComponentProvider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreementDetailComponentProvider ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementDetailComponentProvider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
