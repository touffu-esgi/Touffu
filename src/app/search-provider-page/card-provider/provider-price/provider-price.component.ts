import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-provider-price',
  templateUrl: './provider-price.component.html',
  styleUrls: ['./provider-price.component.scss']
})
export class ProviderPriceComponent implements OnInit {

  @Input() price = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
