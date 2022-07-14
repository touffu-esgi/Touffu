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
      this.getProviders(this.setFilters(param))
    })

  }

  setFilters (param: {t?: string, c?: string}): string[] {
    const filters: string[] = []
    if (param['t'] && param['t']?.length > 0) {
      filters.push(`animalType=${param['t']}`)
    }
    if (param['c'] && param['c']?.length > 0) {
      filters.push(`city=${param['c']}`)
    }
    return filters;
  }

  displayProvider(providers: ProviderData[]){
    this.providers = providers

  }

  ngOnDestroy() {
    this.subscribeServiceProvider!.unsubscribe()
  }

  getProviders(filters: string[]) {
    this.subscribeServiceProvider = this.serviceProvider.getAllProviders(filters)
      .subscribe(providers => {
        this.displayProvider(providers)
      })
  }
}
