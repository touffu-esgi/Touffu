import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarCitySelectorComponent } from './search-bar-city-selector.component';

describe('SearchBarCitySelectorComponent', () => {
  let component: SearchBarCitySelectorComponent;
  let fixture: ComponentFixture<SearchBarCitySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarCitySelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarCitySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
