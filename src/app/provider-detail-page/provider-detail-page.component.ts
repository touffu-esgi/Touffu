import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Agreement} from "../domaine/agreement/agreement";
import { ProviderService } from '../services/provider/provider.service';
import { ProviderData } from '../domaine/providerData';
import { AuthServiceMockImplementation } from '../services/auth/auth.service.mock.implementation';

@Component({
  selector: 'app-provider-detail-page',
  templateUrl: './provider-detail-page.component.html',
  styleUrls: ['./provider-detail-page.component.scss']
})
export class ProviderDetailPageComponent implements OnInit {
  provider: ProviderData = new ProviderData({
    id: "",
    name: "",
    surname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    base_tariff: 0,
    radius: 0,
    profile_title: "",
    profile_desc: "",
  });
  agreements: Agreement[] = [];
  agreementToDisplay?: Agreement;
  displayList: boolean = true;

  constructor(
    private activeRoute: ActivatedRoute,
    private providerService: ProviderService,
    private router: Router,
    private authService: AuthServiceMockImplementation,
  ) { }

  ngOnInit(): void {

    this.providerService.getOneProviders(this.authService.user!.userReference!.split("/")[4]).subscribe(provider => {
      this.provider = provider;
      this.providerService.getAgreementOfOneProvider(this.authService.user!.userReference!.split("/")[4]).subscribe(agreement => {
        this.agreements = agreement;
      })
    }, error => {
      console.log("ptdr t ki ?");
    });

  }

  displayAgreement(agreement: Agreement) {
    this.agreementToDisplay = agreement;
    this.displayList = false;
  }
}
