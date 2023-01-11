import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProviderCardTitleContainerComponent } from './report-provider-card-title-container.component';

describe('ReportProviderCardTitleContainerComponent', () => {
  let component: ReportProviderCardTitleContainerComponent;
  let fixture: ComponentFixture<ReportProviderCardTitleContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportProviderCardTitleContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportProviderCardTitleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
