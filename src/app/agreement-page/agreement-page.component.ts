import { Component, OnInit } from '@angular/core';
import { Availability } from '../domaine/availability/availability';

@Component({
  selector: 'app-agreement-page',
  templateUrl: './agreement-page.component.html',
  styleUrls: ['./agreement-page.component.scss']
})
export class AgreementPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  setWeeklyDate(availability: Availability) {
    console.log(availability);
  }
}
