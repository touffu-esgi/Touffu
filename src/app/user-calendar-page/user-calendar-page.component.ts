import { Component, OnInit } from '@angular/core';
import {Agreement} from "../domaine/agreement/agreement";
import {ProviderAvailabilityPageComponent} from "../provider-availability-page/provider-availability-page.component";
import {CalendarComponent} from "../calendar-component/calendar.component";
import {Availability} from "../domaine/availability/availability";
import {Timeframe} from "../domaine/availability/timeframe";
import {addToDate, dateEqualsDate, getWeekSundayDate, newUTCDate} from "../utils/date-time.utils";

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
  calendarWeekDates: string[] = []
  refsToAgreements: {day: string, hour: number, agreementId: string}[] = []

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
    this.agreementService.getAgreementWithFilters(filters).subscribe(agreements => {
      this.agreements = agreements
      this.updateCalendar(getWeekSundayDate(new Date()))
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
    this.calendarDateTo = addToDate(weekStart, 6);
    this.selectedTimeframes = []
    this.calendarWeekDates = []
    this.refsToAgreements = []
    for (let day = this.calendarDateFrom ; day <= this.calendarDateTo ; day = addToDate(day, 1)) {
      this.calendarWeekDates.push(this.displayDate(day))
      let fittingAgreements = this.getValidAgreementsAtDate(day)
      fittingAgreements = fittingAgreements.filter(
        agreement => this.checkIfRecurrenceFitsWeekday(agreement, day)
      )
      fittingAgreements.forEach(agreement =>
        this.pushBlockToTimeframes(
          new Date(agreement.beginningDate),
          agreement.duration,
          this.WEEKDAYS[day.getDay()],
          agreement.id!
        )
      )
    }
  }

  pushBlockToTimeframes (start: Date, duration: number, day: string, agreementId: string) {
    const startTime = start.getHours() + start.getMinutes() / 60;
    const endTime = startTime + duration / 60;
    for (let time = startTime ; time < endTime ; time += 0.25) {
      this.selectedTimeframes.push(new Timeframe(day, time))
      this.refsToAgreements.push({day: day, hour: time, agreementId: agreementId})
    }
  }

  getValidAgreementsAtDate(date: Date): Agreement[] {
    return this.agreements.filter(agreement => {
      if (agreement.recurring) {
        const dateBegin = newUTCDate(agreement.beginningDate)
        const dateEnd = newUTCDate(agreement.endDate, true)
        return dateBegin <= date && date <= dateEnd
      } else {
        return dateEqualsDate(new Date(agreement.beginningDate), date)
      }
    })
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

  toWeekBefore() {
    this.updateCalendar(addToDate(this.calendarDateFrom, 0, -1))
  }

  toNow() {
    this.updateCalendar(getWeekSundayDate(new Date()))
  }

  toWeekAfter() {
    this.updateCalendar(addToDate(this.calendarDateFrom, 0, 1))
  }

  displayDate(date: Date): string {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

  goToAgreement(day: string, hour: number): string {
    const ref = this.refsToAgreements.filter(ref => ref.day === day && ref.hour === hour)
    if (ref.length > 0) return ref[0].agreementId
    return ""
  }
}
