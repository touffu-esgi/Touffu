import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarContainerComponent } from './search-bar-container.component';

describe('SearchBarContainerComponent', () => {
  let component: SearchBarContainerComponent;
  let fixture: ComponentFixture<SearchBarContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
