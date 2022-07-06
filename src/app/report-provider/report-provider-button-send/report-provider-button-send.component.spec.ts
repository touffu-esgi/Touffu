import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProviderButtonSendComponent } from './report-provider-button-send.component';

describe('ReportProviderButtonSendComponent', () => {
  let component: ReportProviderButtonSendComponent;
  let fixture: ComponentFixture<ReportProviderButtonSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportProviderButtonSendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportProviderButtonSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
