import {Component, OnInit} from '@angular/core';
import {ProviderService} from "../services/provider/provider.service";
import {Observable, Subscription} from "rxjs";
import {ProviderData} from "../domaine/providerData";
import {AddressService} from "../services/address/address.service";
import {Address} from "../domaine/address/address";

@Component({
  selector: 'app-search-provider-page',
  templateUrl: './search-provider-page.component.html',
  styleUrls: ['./search-provider-page.component.scss']
})
export class SearchProviderPageComponent implements OnInit {
  providers: ProviderData[] = [];
  address?: Address;
  constructor(private serviceProvider: ProviderService, private addressService: AddressService) { }
  subscribeServiceProvider?: Subscription;

  ngOnInit(): void {
    this.subscribeServiceProvider = this.serviceProvider.getAllProviders()
      .subscribe(providers => {
        console.log(providers);
        this.displayProvider(providers)
      })
  }

  displayProvider(providers: ProviderData[]){
    this.providers = providers
  }

  ngOnDestroy() {
    this.subscribeServiceProvider!.unsubscribe()
  }
}
