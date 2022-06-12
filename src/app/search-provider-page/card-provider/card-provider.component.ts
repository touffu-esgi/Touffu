import {Component, Input, OnInit} from '@angular/core';
import {ProviderData} from "../../domaine/providerData";
import {Address} from "../../domaine/address/address";

@Component({
  selector: 'app-card-provider',
  templateUrl: './card-provider.component.html',
  styleUrls: ['./card-provider.component.scss']
})
export class CardProviderComponent implements OnInit {

  @Input() provider?: ProviderData;
  @Input() address?: Address;
  constructor() { }

  ngOnInit(): void {
  }


}
