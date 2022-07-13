import {Component, Input, OnInit} from '@angular/core';
import {ProviderData} from "../../domaine/providerData";
import {Address} from "../../domaine/address/address";
import {AddressService} from "../../services/address/address.service";

@Component({
  selector: 'app-card-provider',
  templateUrl: './card-provider.component.html',
  styleUrls: ['./card-provider.component.scss']
})
export class CardProviderComponent implements OnInit {

  @Input() provider?: ProviderData;
  @Input() address?: Address;
  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
    this.fetchAddress(this.provider!)
  }

  fetchAddress(provider: ProviderData){
    this.addressService.getOneAddress(provider!.address).subscribe(address => {
      this.address = address
    })

  }

}
