import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ProviderData} from "../domaine/providerData";
import {Address} from "../domaine/address/address";
import {AddressService} from "../services/address/address.service";
import { AuthServiceMockImplementation } from '../services/auth/auth.service.mock.implementation';
import { RecommandationService } from '../services/recommandation/recommandation.service';
import { Recommendation } from '../domaine/recommendation/recommendation';



@Component({

  selector: 'app-provider-description-page',
  templateUrl: './provider-description-page.component.html',
  styleUrls: ['./provider-description-page.component.scss']
})
export class ProviderDescriptionPageComponent implements OnInit {

  provider?: ProviderData;
  address?: Address;
  recommendations?: Recommendation[];

  constructor(private recommandationService: RecommandationService,
              private addressService: AddressService,
              private authService: AuthServiceMockImplementation) {}

  ngOnInit(): void {
    this.provider = history.state[0]
    this.fetchAddress(this.provider!)
    this.fetchRecommendation();
  }

  fetchAddress(provider: ProviderData) {
    this.addressService.getOneAddress(provider!.address).subscribe(address => {
      this.address = address
    })
  }

  sendReco(recoText: string) {
    this.addRecoInCurrentState(recoText);
    this.recommandationService.addRecommendation(this.provider!.id, this.authService.user!.id!, recoText, 2, new Date());
  }

  addRecoInCurrentState(recoText: string) {
    this.recommendations?.push(new Recommendation({
      providerId: this.provider!.id,
      recipientId: this.authService.user!.id!,
      review: recoText
    }))
  }

  private fetchRecommendation() {
    this.recommandationService.getRecommendations(this.provider!.id!).subscribe(recommendations => {
      this.recommendations = recommendations;
      console.log(this.recommendations);
    });
  }
}
