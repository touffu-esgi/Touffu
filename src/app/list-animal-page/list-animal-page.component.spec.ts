import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnimalPageComponent } from './list-animal-page.component';

describe('AddAnimalPageComponent', () => {
  let component: ListAnimalPageComponent;
  let fixture: ComponentFixture<ListAnimalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAnimalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAnimalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
