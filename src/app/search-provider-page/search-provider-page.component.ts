import {Component, OnInit} from '@angular/core';
import {ProviderService} from "../services/provider/provider.service";
import {Observable, Subscription} from "rxjs";
import {ProviderData} from "../domaine/providerData";
import {AddressService} from "../services/address/address.service";
import {Address} from "../domaine/address/address";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-provider-page',
  templateUrl: './search-provider-page.component.html',
  styleUrls: ['./search-provider-page.component.scss']
})
export class SearchProviderPageComponent implements OnInit {
  providers: ProviderData[] = [];
  address?: Address;
  constructor(
    private serviceProvider: ProviderService,
    private addressService: AddressService,
    private activatedRoute: ActivatedRoute,
  ) { }
  subscribeServiceProvider?: Subscription;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(param => {
      if(param["t"] && param["t"].split(",").length > 0){
        this.getProviders(param["t"].split(","))
      }else{
        this.getProviders()
      }
    })

  }

  displayProvider(providers: ProviderData[]){
    this.providers = providers

  }

  ngOnDestroy() {
    this.subscribeServiceProvider!.unsubscribe()
  }

  getProviders(filter?: string[]) {
    this.subscribeServiceProvider = this.serviceProvider.getAllProviders(filter)
      .subscribe(providers => {
        this.displayProvider(providers)
      })
  }
}
