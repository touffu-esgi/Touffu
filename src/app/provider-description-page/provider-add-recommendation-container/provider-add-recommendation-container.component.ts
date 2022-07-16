import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Recommendation} from "../../domaine/recommendation/recommendation";
import {RecommandationService} from "../../services/recommandation/recommandation.service";

@Component({
  selector: 'app-provider-add-recommendation-container',
  templateUrl: './provider-add-recommendation-container.component.html',
  styleUrls: ['./provider-add-recommendation-container.component.scss']
})
export class ProviderAddRecommendationContainerComponent implements OnInit {

  sendRecommendation: Recommendation = new Recommendation({})
  @Output() hasSentRecommendation: EventEmitter<string> = new EventEmitter()

  constructor(
    private recommendationService: RecommandationService
  ) { }

  ngOnInit(): void {
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
