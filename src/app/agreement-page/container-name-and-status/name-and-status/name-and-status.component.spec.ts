import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameAndStatusComponent } from './name-and-status.component';

describe('NameAndStatusComponent', () => {
  let component: NameAndStatusComponent;
  let fixture: ComponentFixture<NameAndStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameAndStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameAndStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
