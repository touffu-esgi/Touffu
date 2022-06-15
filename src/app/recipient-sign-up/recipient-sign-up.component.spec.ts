import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientSignUpComponent } from './recipient-sign-up.component';

describe('RecipientSignUpComponent', () => {
  let component: RecipientSignUpComponent;
  let fixture: ComponentFixture<RecipientSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipientSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
