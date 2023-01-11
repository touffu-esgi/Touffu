import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDescriptionTitleReportImageComponent } from './provider-description-title-report-image.component';

describe('ProviderDescriptionTitleReportImageComponent', () => {
  let component: ProviderDescriptionTitleReportImageComponent;
  let fixture: ComponentFixture<ProviderDescriptionTitleReportImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderDescriptionTitleReportImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDescriptionTitleReportImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
