import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnimalPageComponent } from './add-animal-page.component';

describe('AddAnimalPageComponent', () => {
  let component: AddAnimalPageComponent;
  let fixture: ComponentFixture<AddAnimalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAnimalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnimalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
