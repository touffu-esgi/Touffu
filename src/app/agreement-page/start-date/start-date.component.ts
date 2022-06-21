import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AvailabilityService } from '../../services/availability/availability.service';
import { Availability } from '../../domaine/availability/availability';

@Component({
  selector: 'app-start-date',
  templateUrl: './start-date.component.html',
  styleUrls: ['./start-date.component.scss']
})
export class StartDateComponent implements OnInit {
  @Output() weekly = new EventEmitter<Availability[]>();
  constructor(private availabilityService: AvailabilityService) {}

  ngOnInit(): void {
  }

  getWeeklyRecurrence(startDate: HTMLInputElement) {
    this.availabilityService.getWeeklyAvailability("1", startDate.value.toString()).subscribe(weeklyAvailability => {
      this.weekly.emit(weeklyAvailability);
    });
  }
}
