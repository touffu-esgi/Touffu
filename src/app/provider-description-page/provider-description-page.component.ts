import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ProviderData} from "../domaine/providerData";
import {Address} from "../domaine/address/address";
import {AddressService} from "../services/address/address.service";
import { RecommendationService } from '../services/recommendation/recommendation.service';
import { Recommendation } from '../domaine/recommendation/recommendation';
import { AuthService } from '../services/auth/auth.service';
import { User } from '../domaine/user/user';
import {ProviderService} from "../services/provider/provider.service";



@Component({

  selector: 'app-provider-description-page',
  templateUrl: './provider-description-page.component.html',
  styleUrls: ['./provider-description-page.component.scss']
})
export class ProviderDescriptionPageComponent implements OnInit {
  provider?: ProviderData;
  address?: Address;
  recommendations?: Recommendation[];
  sendRecommendation: Recommendation = new Recommendation({})
  average: boolean = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private recommendationService: RecommendationService,
    private addressService: AddressService,
    private authService: AuthService,
    private providerService: ProviderService
  ) {}

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(params => {
      if (params['provider']) {
          this.providerService.getOneProviders(params['provider']).subscribe(provider => {
          this.provider = provider
            this.fetchAddress(this.provider!)
            this.fetchRecommendation();
            this.sendRecommendation.providerId = this.provider!.id;
            this.sendRecommendation.recipientId = this.authService.user!.userReference!.split("/").pop()!;
        })
      }
    })

  }

  fetchAddress(provider: ProviderData) {
    this.addressService.getOneAddress(provider!.address).subscribe(address => {
      this.address = address
    })
  }

  newRecommendationAdded(recoText: string) {
    this.recommendations?.push(new Recommendation({
      providerId: this.provider!.id,
      recipientId: this.authService.user!.id!,
      review: recoText
    }))
    this.average = !this.average
  }

  private fetchRecommendation() {
    this.recommendationService.getRecommendations(this.provider!.id!).subscribe(recommendations => {
      this.recommendations = recommendations;
    });
  }
}
