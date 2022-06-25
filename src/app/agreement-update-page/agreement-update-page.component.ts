import { Component, OnInit } from '@angular/core';
import { AuthServiceMockImplementation } from '../services/auth/auth.service.mock.implementation';
import { AgreementService } from '../services/agreement/agreement.service';
import { ProviderService } from '../services/provider/provider.service';
import { ActivatedRoute } from '@angular/router';
import { Agreement } from '../domaine/agreement/agreement';
import { ProviderData } from '../domaine/providerData';
import { User } from '../domaine/user/user';

@Component({
  selector: 'app-agreement-update-page',
  templateUrl: './agreement-update-page.component.html',
  styleUrls: ['./agreement-update-page.component.scss']
})
export class AgreementUpdatePageComponent implements OnInit {

  constructor(
    private authService: AuthServiceMockImplementation,
    private agreementService: AgreementService,
    private providerService: ProviderService,
    private activatedRoute: ActivatedRoute,
  ){}

  agreement?: Agreement;
  provider?: ProviderData;
  user?: User;

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
      this.agreement.endDate = this.agreement.endDate.split("T")[0]
      if(this.agreement.beginningDate)
        this.agreement.beginningDate = this.agreement.beginningDate.split("T")[0]
      console.log(agreement);
      this.providerService.getOneByUrl(agreement[0].providerRef).subscribe(provider => {
        this.provider = provider;
      });
    });
  }

  send() {
    this.agreementService.update(this.agreement!).subscribe()
  }
}
