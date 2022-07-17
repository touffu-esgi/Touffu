import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Recommendation} from "../../domaine/recommendation/recommendation";
import {RecommendationService} from "../../services/recommendation/recommendation.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-provider-add-recommendation-container',
  templateUrl: './provider-add-recommendation-container.component.html',
  styleUrls: ['./provider-add-recommendation-container.component.scss']
})
export class ProviderAddRecommendationContainerComponent implements OnInit {

  sendRecommendation: Recommendation = new Recommendation({})
  @Output() hasSentRecommendation: EventEmitter<string> = new EventEmitter()

  constructor(
    private recommendationService: RecommendationService,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.recommendationInit()
  }

  private recommendationInit() {
    this.activeRoute.queryParams.subscribe(params => {
      if (params['provider']) {
        this.sendRecommendation = new Recommendation({
          providerId: params['provider'],
          recipientId: this.authService.user!.id
        })
      }
    })
  }

  sendReco() {
    this.addRecoInCurrentState(this.sendRecommendation.review!);
    this.recommendationService.addRecommendation(this.sendRecommendation);
    this.sendRecommendation = new Recommendation({})
  }

  addRecoInCurrentState(recoText: string) {
    this.hasSentRecommendation.emit(recoText);
  }

}
