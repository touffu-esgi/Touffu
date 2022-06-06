import {Component, OnInit} from '@angular/core';
import {ProviderService} from "../services/provider/provider.service";
import {Observable, Subscription} from "rxjs";
import {ProviderData} from "../domaine/providerData";

@Component({
  selector: 'app-search-provider-page',
  templateUrl: './search-provider-page.component.html',
  styleUrls: ['./search-provider-page.component.scss']
})
export class SearchProviderPageComponent implements OnInit {
  private providers: ProviderData[] = [];
  constructor(private serviceProvider: ProviderService) { }

  async ngOnInit(): Promise<void> {
    this.providers = await this.serviceProvider.getAllProviders()

    console.log(this.providers)
  }

}
