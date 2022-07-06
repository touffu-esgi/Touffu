import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindProviderSelectorComponent } from './find-provider-selector.component';

describe('FindProviderSelectorComponent', () => {
  let component: FindProviderSelectorComponent;
  let fixture: ComponentFixture<FindProviderSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindProviderSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindProviderSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
