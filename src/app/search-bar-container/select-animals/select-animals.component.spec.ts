import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAnimalsComponent } from './select-animals.component';

describe('SelectAnimalsComponent', () => {
  let component: SelectAnimalsComponent;
  let fixture: ComponentFixture<SelectAnimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAnimalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
