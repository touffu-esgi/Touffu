import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ProviderData} from "../domaine/providerData";
import {Address} from "../domaine/address/address";

@Component({

  selector: 'app-provider-description-page',
  templateUrl: './provider-description-page.component.html',
  styleUrls: ['./provider-description-page.component.scss']
})
export class ProviderDescriptionPageComponent implements OnInit {


  provider?: ProviderData;
  address?: Address;
  constructor(private route: Router,) {
  }

  ngOnInit(): void {
    console.log(history.state)
    this.provider = history.state[0]
    this.address = history.state[1]
  }

}
