import { Component, OnInit } from '@angular/core';
import {Agreement} from "../domaine/agreement/agreement";
import {ProviderAvailabilityPageComponent} from "../provider-availability-page/provider-availability-page.component";
import {CalendarComponent} from "../calendar-component/calendar.component";
import {Availability} from "../domaine/availability/availability";
import {Timeframe} from "../domaine/availability/timeframe";
import {addToDate, dateEqualsDate, getWeekMondayDate} from "../utils/date-time.utils";

@Component({
  selector: 'app-user-calendar-page',
  templateUrl: './user-calendar-page.component.html',
  styleUrls: ['./user-calendar-page.component.scss']
})

export class UserCalendarPageComponent extends CalendarComponent {

  agreements: Agreement[] = [];
  newAvailabilities: Availability[] = [];
  calendarDateFrom: Date = new Date();
  calendarDateTo: Date = new Date()

  override ngOnInit(): void {
    this.getAgreements();
    this.initHour();
  }

  private getAgreements() {
    const userRef = this.authService.user!.userReference!.split('/')
    const filters = [
      `${this.authService.user!.userType!}Ref=${userRef.pop()}`,
      "status=Agreed"
    ]
    console.log(filters)
    this.agreementService.getAgreementWithFilters(filters).subscribe(agreements => {
      this.agreements = agreements
      console.log(this.agreements)
      this.updateCalendar(getWeekMondayDate(new Date()))
    })
  }

  override updateTimeframes(day: string, hour: number) {
    const index = this.getIndex(day, hour)
    if (index !== -1) {
      this.selectedTimeframes.splice(index, 1)
    } else {
      this.selectedTimeframes.push(new Timeframe(day, hour))
    }
  }

  updateCalendar(weekStart: Date) {
    this.calendarDateFrom = weekStart;
    this.calendarDateTo = addToDate(weekStart, 0, 1);
    this.selectedTimeframes = []
    console.log(this.calendarDateFrom, this.calendarDateTo)
    for (let day = this.calendarDateFrom ; day < this.calendarDateTo ; day = addToDate(day, 1)) {
      let fittingAgreements = this.checkIfDateFitsAgreement(day)
      fittingAgreements = fittingAgreements.filter(agreement => this.checkIfRecurrenceFitsWeekday(agreement, day))
      fittingAgreements.forEach(agreement =>
        this.pushBlockToTimeframes(
          new Date(agreement.beginningDate), agreement.duration,
          this.WEEKDAYS[day.getDay()]
        )
      )
    }
    console.log(this.selectedTimeframes)
  }

  pushBlockToTimeframes (start: Date, duration: number, day: string) {
    console.log(start, duration)
    const startTime = start.getHours() + start.getMinutes() / 60;
    const endTime = startTime + duration / 60;
    console.log(startTime, endTime)
    for (let time = startTime ; time < endTime ; time += 0.25) {
      this.selectedTimeframes.push(new Timeframe(day, time))
    }
  }

  checkIfDateFitsAgreement(date: Date): Agreement[] {
    const agreements = this.agreements.filter(agreement => {
      if (agreement.recurrence !== 'None') {
        const dateBetweenBounds = new Date(agreement.beginningDate.split('T')[0]) <= date
          && date <= new Date(agreement.endDate.split('T')[0] + 'T23:59')
        return dateBetweenBounds
      } else {
        return dateEqualsDate(new Date(agreement.beginningDate), date)
      }
    })
    return agreements
  }

  checkIfRecurrenceFitsWeekday(agreement: Agreement, weekday: Date): boolean {
    const recurrenceDate: Date = new Date(agreement.beginningDate)
    switch(agreement.recurrence!) {
      case 'Daily':
        return true;
      case 'Weekly':
        return recurrenceDate.getDay() === weekday.getDay();
      case 'Monthly':
        return recurrenceDate.getDate() === weekday.getDate();
      default:
        return dateEqualsDate(recurrenceDate, weekday)
    }
  }
}

class UserCalendarPageComponentImpl extends ProviderAvailabilityPageComponent {
}
