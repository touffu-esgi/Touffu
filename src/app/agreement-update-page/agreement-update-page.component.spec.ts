import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementUpdatePageComponent } from './agreement-update-page.component';

describe('AgreementUpdatePageComponent', () => {
  let component: AgreementUpdatePageComponent;
  let fixture: ComponentFixture<AgreementUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreementUpdatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
