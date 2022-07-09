import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider/provider.service';
import { AuthServiceMockImplementation } from '../services/auth/auth.service.mock.implementation';
import { Availability } from '../domaine/availability/availability';
import { convertNumericTimeToDisplay } from '../utils/date-time.utils';

@Component({
  selector: 'app-provider-availability-page',
  templateUrl: './provider-availability-page.component.html',
  styleUrls: ['./provider-availability-page.component.scss']
})
export class ProviderAvailabilityPageComponent implements OnInit {

  availabilities: Availability[] = [];
  constructor(private providerService: ProviderService, private authService: AuthServiceMockImplementation) { }
  morningHour: number[] = [];
  afternoonHour: number[] = [];

  ngOnInit(): void {
    this.getAvailability();
    this.initHour();
  }

  private getAvailability() {
    this.providerService.getProviderAvailability(this.authService.user!.id!).subscribe(availabilities => {
      this.availabilities = availabilities;
    })
  }

  private initHour() {
    for (let i = 9.0; i < 12.25; i += 0.25){
      this.morningHour.push(i);
    }

    for (let i = 12.25; i < 20.25; i+= 0.25){
      this.afternoonHour.push(i);
    }
  }



  displayHour() {
    console.log(this.availabilities);
  }

  computeDisplayHour(time: number) {
    return convertNumericTimeToDisplay(time)
  }
}
