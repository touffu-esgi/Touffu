import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  constructor() { }

  ngOnInit(): void {
    this.getCurrentLocation();
  }

  private getCurrentLocation() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((param) => {
        this.lat = param.coords.latitude;
        this.lng = param.coords.longitude;
      })
    }
  }
}
