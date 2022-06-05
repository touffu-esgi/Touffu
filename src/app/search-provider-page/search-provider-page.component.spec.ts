import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProviderPageComponent } from './search-provider-page.component';

describe('SearchProviderPageComponent', () => {
  let component: SearchProviderPageComponent;
  let fixture: ComponentFixture<SearchProviderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchProviderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProviderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
