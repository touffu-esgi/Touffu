import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalRecipientInformationComponent } from './personal-recipient-information.component';

describe('PersonalRecipientInformationComponent', () => {
  let component: PersonalRecipientInformationComponent;
  let fixture: ComponentFixture<PersonalRecipientInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalRecipientInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalRecipientInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
