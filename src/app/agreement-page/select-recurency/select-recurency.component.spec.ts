import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRecurencyComponent } from './select-recurency.component';

describe('SelectRecurencyComponent', () => {
  let component: SelectRecurencyComponent;
  let fixture: ComponentFixture<SelectRecurencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectRecurencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRecurencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
