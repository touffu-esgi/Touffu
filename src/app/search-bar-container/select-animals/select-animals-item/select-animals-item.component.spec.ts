import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAnimalsItemComponent } from './select-animals-item.component';

describe('SelectAnimalsItemComponent', () => {
  let component: SelectAnimalsItemComponent;
  let fixture: ComponentFixture<SelectAnimalsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAnimalsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAnimalsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
