import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerNameAndStatusComponent } from './container-name-and-status.component';

describe('ContainerNameAndStatusComponent', () => {
  let component: ContainerNameAndStatusComponent;
  let fixture: ComponentFixture<ContainerNameAndStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerNameAndStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerNameAndStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
