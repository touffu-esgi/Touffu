import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarFindButtonComponent } from './search-bar-find-button.component';

describe('SearchBarFindButtonComponent', () => {
  let component: SearchBarFindButtonComponent;
  let fixture: ComponentFixture<SearchBarFindButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarFindButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarFindButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
