import { Component, Input, OnInit } from '@angular/core';
import { Recommendation } from '../../../domaine/recommendation/recommendation';

@Component({
  selector: 'app-provider-description-recommendations-card',
  templateUrl: './provider-description-recommendations-card.component.html',
  styleUrls: ['./provider-description-recommendations-card.component.scss']
})
export class ProviderDescriptionRecommendationsCardComponent implements OnInit {
  @Input() recommendation?: Recommendation
  constructor() { }

  ngOnInit(): void {
  }

}
