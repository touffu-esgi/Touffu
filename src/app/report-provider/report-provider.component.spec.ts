import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProviderComponent } from './report-provider.component';

describe('ReportProviderComponent', () => {
  let component: ReportProviderComponent;
  let fixture: ComponentFixture<ReportProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
