import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientProfileComponent } from './recipient-profile.component';

describe('RecipientProfileComponent', () => {
  let component: RecipientProfileComponent;
  let fixture: ComponentFixture<RecipientProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipientProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
