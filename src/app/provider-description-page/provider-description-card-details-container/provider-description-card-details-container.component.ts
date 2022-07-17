import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {RecommendationService} from "../../services/recommendation/recommendation.service";

@Component({
  selector: 'app-provider-description-card-details-container',
  templateUrl: './provider-description-card-details-container.component.html',
  styleUrls: ['./provider-description-card-details-container.component.scss']
})
export class ProviderDescriptionCardDetailsContainerComponent implements OnInit, OnChanges {

  @Input() base_tarif?: number;
  @Input() name?: string;
  @Input() id?: string;
  @Input() isNotInProfile: boolean = true;
  @Input() imagePath: string | null = null;
  @Input() updateAverageTrigger: boolean = false;
  @Input() userReference: string = "";
  average: number = 5;
  constructor(private recommendationService: RecommendationService) { }

  ngOnInit(): void {
    this.fetchAverage()
  }

  private fetchAverage() {
    this.recommendationService.getAverage(this.id!).subscribe(res => {
      if (res.average !== 0) this.average = parseFloat(res.average.toFixed(2))
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fetchAverage()
  }

}
