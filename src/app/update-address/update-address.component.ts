import { Component, Input, OnInit } from '@angular/core';
import { Address } from '../domaine/address/address';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.scss']
})
export class UpdateAddressComponent implements OnInit {
  @Input() address: Address = Address.newEmptyAddress();
  constructor() { }

  ngOnInit(): void {
  }

}
