import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProviderCardCommentContainerComponent } from './report-provider-card-comment-container.component';

describe('ReportProviderCardCommentContainerComponent', () => {
  let component: ReportProviderCardCommentContainerComponent;
  let fixture: ComponentFixture<ReportProviderCardCommentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportProviderCardCommentContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportProviderCardCommentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
