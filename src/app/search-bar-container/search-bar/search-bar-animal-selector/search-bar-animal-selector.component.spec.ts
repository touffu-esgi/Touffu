import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarAnimalSelectorComponent } from './search-bar-animal-selector.component';

describe('SearchBarAnimalSelectorComponent', () => {
  let component: SearchBarAnimalSelectorComponent;
  let fixture: ComponentFixture<SearchBarAnimalSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarAnimalSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarAnimalSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
