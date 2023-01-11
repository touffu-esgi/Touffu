import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalProviderComponentComponent } from './personal-provider-component.component';

describe('PersonalProviderComponentComponent', () => {
  let component: PersonalProviderComponentComponent;
  let fixture: ComponentFixture<PersonalProviderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalProviderComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalProviderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
