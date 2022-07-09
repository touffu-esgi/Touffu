import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {convertNumericTimeToDisplay, setWeekdays, translateDay} from '../utils/date-time.utils';
import {AvailabilityService} from "../services/availability/availability.service";
import {AgreementService} from "../services/agreement/agreement.service";
import {ProviderService} from "../services/provider/provider.service";
import {AuthService} from "../services/auth/auth.service";
import {Timeframe} from "../domaine/availability/timeframe";

@Component({
  selector: 'app-calendar-component',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor(
    protected availabilityService: AvailabilityService,
    protected agreementService: AgreementService,
    protected providerService: ProviderService,
    protected authService: AuthService
  ) {}

  WEEKDAYS: string[] = setWeekdays()
  dailyHours: number[] = [];
  selectedTimeframes: Timeframe[] = [];
  @Output() selectedHour = new EventEmitter<{day: string, hour: number}>()

  ngOnInit(): void {
    this.initHour()
  }

  protected initHour(beginHour: number = 6, endHour: number = 22) {
    for (let i = beginHour; i < endHour; i += 0.25){
      this.dailyHours.push(i);
    }
  }

  computeDisplayHour(time: number) {
    return convertNumericTimeToDisplay(time)
  }

  translateDay (day: string) {
    return translateDay(day);
  }

  updateTimeframes(day: string, hour: number) {
    this.selectedHour.emit({day: day, hour: hour})
  }

  getClass(day: string, hour: number): string {
    if (this.getIndex(day, hour, this.selectedTimeframes)) return 'selected';
    return ''
  }

  getIndex (day: string, hour: number, timeframes: Timeframe[] = this.selectedTimeframes): number {
    return timeframes.findIndex(tf => tf.day === day && tf.hour === hour)
  }

}
