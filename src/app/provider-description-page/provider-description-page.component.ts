import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ProviderData} from "../domaine/providerData";
import {Address} from "../domaine/address/address";
import {AddressService} from "../services/address/address.service";

@Component({

  selector: 'app-provider-description-page',
  templateUrl: './provider-description-page.component.html',
  styleUrls: ['./provider-description-page.component.scss']
})
export class ProviderDescriptionPageComponent implements OnInit {


  provider?: ProviderData;
  address?: Address;

  constructor(private route: Router, private addressService: AddressService) {
  }

  ngOnInit(): void {
    this.provider = history.state[0]
    this.fetchAddress(this.provider!)
  }

  fetchAddress(provider: ProviderData) {
    this.addressService.getOneAddress(provider!.address).subscribe(address => {
      this.address = address
    })
  }
}
