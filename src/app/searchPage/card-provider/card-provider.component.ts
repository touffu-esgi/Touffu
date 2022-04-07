import { Component, OnInit } from '@angular/core';
import {ProviderServiceService} from "../../services/providerService/provider-service.service";
import {ProviderModel} from "../../models/provider.model";

@Component({
  selector: 'app-card-provider',
  templateUrl: './card-provider.component.html',
  styleUrls: ['./card-provider.component.css']
})
export class CardProviderComponent implements OnInit {
  private providerServiceService: ProviderServiceService = new ProviderServiceService();
  public providers: ProviderModel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.fetchProviders()
  }

  private fetchProviders() {
    this.providers = this.providerServiceService.fetchAllProvider();

  }

}
