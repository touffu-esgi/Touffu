import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCalendarPageComponent } from './user-calendar-page.component';

describe('CalendarComponent', () => {
  let component: UserCalendarPageComponent;
  let fixture: ComponentFixture<UserCalendarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCalendarPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCalendarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
