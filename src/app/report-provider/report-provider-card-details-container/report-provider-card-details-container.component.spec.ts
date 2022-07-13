import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProviderCardDetailsContainerComponent } from './report-provider-card-details-container.component';

describe('ReportProviderCardDetailsContainerComponent', () => {
  let component: ReportProviderCardDetailsContainerComponent;
  let fixture: ComponentFixture<ReportProviderCardDetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportProviderCardDetailsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportProviderCardDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
