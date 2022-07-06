import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgreementService } from '../services/agreement/agreement.service';
import { Agreement } from '../domaine/agreement/agreement';
import { ProviderService } from '../services/provider/provider.service';
import { ProviderData } from '../domaine/providerData';
import { PositionService } from '../services/position/position.service';
import {AuthService} from "../services/auth/auth.service";

@Component({
  selector: 'app-agreement-detail',
  templateUrl: './agreement-detail.component.html',
  styleUrls: ['./agreement-detail.component.scss']
})
export class AgreementDetailComponent implements OnInit {
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  isPosition = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private authService: AuthService,
    private agreementService: AgreementService,
    private providerService: ProviderService,
    private positionService: PositionService
  ) { }
  agreement?: Agreement;
  provider?: ProviderData;
  ngOnInit(): void {
    this.getAgreement();
  }

  private getAgreement() {
    this.activeRoute.queryParams.subscribe(params => {
      if (params["agreementId"]){
        this.agreementService.getAgreementByAgreementAndRecipientId(params["agreementId"], this.authService.user!.id!).subscribe(agreement => {
          this.agreement = agreement[0];
          this.getProvider(this.agreement.providerRef)
          this.getPosition(params["agreementId"]);
        })
      }
    })
  }

  private getProvider(providerUrl: string) {
    this.providerService.getOneProviderByUrl(providerUrl).subscribe(provider => {

      this.provider = provider;
    })
  }

  private getPosition(agreementId: string) {

    this.positionService.getLastPosition(agreementId).subscribe(position => {
      this.lat = position.xCoordinate;
      this.lng = position.yCoordinate;
      this.isPosition = true;
    }, error => {
      this.isPosition = false;
    });
  }
}
