import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceMockImplementation } from '../services/auth/auth.service.mock.implementation';
import { AgreementService } from '../services/agreement/agreement.service';
import { Agreement } from '../domaine/agreement/agreement';
import { ProviderService } from '../services/provider/provider.service';
import { ProviderData } from '../domaine/providerData';
import { PositionService } from '../services/position/position.service';
import { Position } from '../domaine/position/position';

@Component({
  selector: 'app-agreement-detail',
  templateUrl: './agreement-detail.component.html',
  styleUrls: ['./agreement-detail.component.scss']
})
export class AgreementDetailComponent implements OnInit {
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  interval?: number;

  constructor(
    private activeRoute: ActivatedRoute,
    private authService: AuthServiceMockImplementation,
    private agreementService: AgreementService,
    private providerService: ProviderService,
    private positionService: PositionService
  ) { }
  agreement?: Agreement;
  provider?: ProviderData;
  ngOnInit(): void {
    this.getAgreement();
    this.interval = setInterval(() => {
      this.postPosition(this.agreement!.id!);
    }, 5000);
  }

  private getAgreement() {
    this.activeRoute.queryParams.subscribe(params => {
      if (params["agreementId"]){
        this.agreementService.getAgreementByAgreementAndRecipientId(params["agreementId"], this.authService.user!.id!).subscribe(agreement => {
          this.agreement = agreement[0];
          // @ts-ignore
          const providerId = this.agreement.provider.split("/")[4]
          this.getProvider(providerId)
          this.getPosition(params["agreementId"]);
        })
      }
    })
  }

  private getProvider(providerId: string) {
    this.providerService.getOneProviders(providerId).subscribe(provider => {
      this.provider = provider;
    })
  }

  private getPosition(agreementId: string) {
    this.positionService.getLastPosition(agreementId).subscribe(position => {
      this.lat = position.xCoordinate;
      this.lng = position.yCoordinate;
    });
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  private postPosition(agreementId: string) {
    this.positionService.getLastPosition(agreementId).subscribe(position => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          const currentPos = new Position(agreementId, this.lat, this.lng)

          this.positionService.pushPosition(currentPos).subscribe(url => {
            console.log(url);
          })
        });
      } else {
        console.log("No support for geolocation")
      }

    });

  }
}
