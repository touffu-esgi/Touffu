import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ProviderData} from "../domaine/providerData";

@Component({

  selector: 'app-provider-description-page',
  templateUrl: './provider-description-page.component.html',
  styleUrls: ['./provider-description-page.component.scss']
})
export class ProviderDescriptionPageComponent implements OnInit {


  provider?: ProviderData;
  constructor(private route: Router,) {


  }

  ngOnInit(): void {
    this.provider = history.state
  }

}
