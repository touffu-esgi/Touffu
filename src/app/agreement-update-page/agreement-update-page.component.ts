import { Component, OnInit } from '@angular/core';
import { AuthServiceMockImplementation } from '../services/auth/auth.service.mock.implementation';
import { AgreementService } from '../services/agreement/agreement.service';
import { ProviderService } from '../services/provider/provider.service';
import { ActivatedRoute } from '@angular/router';
import { Agreement } from '../domaine/agreement/agreement';
import { ProviderData } from '../domaine/providerData';
import { User } from '../domaine/user/user';
import { Availability } from '../domaine/availability/availability';
import { AvailabilityService } from '../services/availability/availability.service';



@Component({
  selector: 'app-agreement-update-page',
  templateUrl: './agreement-update-page.component.html',
  styleUrls: ['./agreement-update-page.component.scss']
})
export class AgreementUpdatePageComponent implements OnInit {
  startHourComponent?: string;

  constructor(
    private authService: AuthServiceMockImplementation,
    private agreementService: AgreementService,
    private providerService: ProviderService,
    private activatedRoute: ActivatedRoute,
    private availabilityService: AvailabilityService
  ){}

  public availabilities: Availability[] = [];
  public hours: number[] = [];
  public durations: number[] = [];

  public selectedAvailability?: Availability;
  agreement?: Agreement;
  provider?: ProviderData;
  user?: User;
  day?: number | string;

  ngOnInit(): void {
    this.user = this.authService.user;
    this.activatedRoute.queryParams.subscribe(params => {
      if (params["agreementId"]){
        this.getAgreement(params["agreementId"]);
      }
    })
  }

  private getAgreement(agreementId: string) {
    this.agreementService.getAgreementByAgreementAndRecipientId(agreementId, this.user!.id!).subscribe(agreement => {
      this.agreement = agreement[0];
      this.agreement.duration = this.agreement.duration / 60;
      this.startHourComponent = this.agreement.beginningDate.split("T")[1].split(".")[0].substr(0,5)
      this.agreement.endDate = this.agreement.endDate.split("T")[0];
      if(this.agreement.beginningDate)
        this.agreement.beginningDate = this.agreement.beginningDate.split("T")[0]
      this.providerService.getOneByUrl(agreement[0].providerRef).subscribe(provider => {
        this.provider = provider;
        this.setWeeklyDate(this.agreement!.beginningDate!);
      });
    });
  }


  setWeeklyDate(date: string) {
    this.availabilityService.getWeeklyAvailability(this.provider!.id!, date).subscribe(weeklyAvailability => {
      this.availabilities = weeklyAvailability;
      this.day = "MONDAY"
      this.getStartHour(this.day);
      this.setMaxDuration(this.startHourComponent!)
    });
  }

  getStartHour(value: string): void {
    this.hours = []
    this.availabilities?.forEach(availability => {
      if(availability.day == value){
        this.selectedAvailability = availability
        availability.dailyAvailability?.forEach((timeframe) => {
          for (let hour = timeframe.beginAt ; hour < timeframe.endAt ; hour += 0.25) {
            this.hours.push(hour)
          }
        })
      }
    })
  }

  computeHourDisplay (hour: number): string {
    const hDisplay = parseInt(hour.toString()) % 24
    const minDisplay = (hour - hDisplay) * 60
    return `${hDisplay}:${minDisplay === 0 ? '00' : minDisplay}`
  }

  setMaxDuration(hour: string) {
    this.durations = []
    const h = parseFloat(hour)
    this.selectedAvailability!.dailyAvailability?.forEach((timeframe) => {
      if (timeframe.beginAt <= h && h < timeframe.endAt) {
        const maxDuration = timeframe.endAt - h;
        for (let i = 0.25 ; i < maxDuration ; i += 0.25) {
          this.durations.push(i)
        }
      }
    })


  }

  setRecurrence(recurrence: string) {
    this.agreement!.recurrence = recurrence;
    this.agreement!.recurring = true;
  }

  concatHourWithBeginningDate(hour: string): void {
    this.agreement!.beginningDate = this.agreement!.beginningDate.split("T")[0];
    this.agreement!.beginningDate += `T${hour}`;
  }

  send() {
    this.concatHourWithBeginningDate(this.startHourComponent!)
    this.agreementService.update(this.agreement!).subscribe()
  }
}
