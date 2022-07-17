import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-provider-description-card-details-grades',
  templateUrl: './provider-description-card-details-grades.component.html',
  styleUrls: ['./provider-description-card-details-grades.component.scss']
})
export class ProviderDescriptionCardDetailsGradesComponent implements OnInit, OnChanges {

  @Input() average: number = 5;
  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) { }

}
