import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({

  selector: 'app-provider-description-page',
  templateUrl: './provider-description-page.component.html',
  styleUrls: ['./provider-description-page.component.scss']
})
export class ProviderDescriptionPageComponent implements OnInit {

  constructor(private route: Router,) { }

  ngOnInit(): void {
  }

}
