import {Component, Input, OnInit} from '@angular/core';
import {ProviderData} from "../../domaine/providerData";

@Component({
  selector: 'app-card-provider',
  templateUrl: './card-provider.component.html',
  styleUrls: ['./card-provider.component.scss']
})
export class CardProviderComponent implements OnInit {

  @Input() provider?: ProviderData;
  constructor() { }

  ngOnInit(): void {
  }


}
