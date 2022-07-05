import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgreementService } from '../services/agreement/agreement.service';
import { Agreement } from '../domaine/agreement/agreement';
import { ProviderService } from '../services/provider/provider.service';
import { ProviderData } from '../domaine/providerData';
import {AuthService} from "../services/auth/auth.service";

@Component({
  selector: 'app-agreement-detail',
  templateUrl: './agreement-detail.component.html',
  styleUrls: ['./agreement-detail.component.scss']
})
export class AgreementDetailComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private authService: AuthService,
    private agreementService: AgreementService,
    private providerService: ProviderService
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
          const providerId = this.agreement.providerRef.split("/")[4]
          this.providerService.getOneProviders(providerId).subscribe(provider => {
            this.provider = provider;
          })
        })
      }
    })
  }
}
